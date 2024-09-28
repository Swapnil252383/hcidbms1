const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (single database)
mongoose.connect('mongodb://localhost:27017/combinedForm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
  overallExperience: Number,
  friendlinessReceiving: Number,
  friendlinessDelivery: Number,
  message: String,
});

// Models
const Contact = mongoose.model('Contact', contactSchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);

// POST route to save contact form data
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(200).send('Message saved successfully');
  } catch (error) {
    res.status(500).send('Failed to save message');
  }
});

// POST route to save feedback form data
app.post('/api/feedback', async (req, res) => {
  const { overallExperience, friendlinessReceiving, friendlinessDelivery, message } = req.body;
  try {
    const feedback = new Feedback({
      overallExperience,
      friendlinessReceiving,
      friendlinessDelivery,
      message,
    });
    await feedback.save();
    res.status(200).send('Feedback saved successfully');
  } catch (error) {
    res.status(500).send('Failed to save feedback');
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
