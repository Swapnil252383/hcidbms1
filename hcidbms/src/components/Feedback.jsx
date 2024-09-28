import React, { useState } from 'react';
import './Feedback.css';

function Feedback() {
  const [overallExperience, setOverallExperience] = useState(0);
  const [friendlinessReceiving, setFriendlinessReceiving] = useState(0);
  const [friendlinessDelivery, setFriendlinessDelivery] = useState(7); 
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          overallExperience,
          friendlinessReceiving,
          friendlinessDelivery,
          message,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setOverallExperience(0);
        setFriendlinessReceiving(0);
        setFriendlinessDelivery(7);
        setMessage('');
      } else {
        console.log('Failed to send feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };
  

  const renderStars = (rating, setRating) => (
    <div className="stars">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <i
              className={
                ratingValue <= rating ? 'fas fa-star' : 'far fa-star'
              }
            ></i>
          </label>
        );
      })}
    </div>
  );

  const renderScale = (rating, setRating) => (
    <div className="scale">
      {[...Array(10)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="scale-rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              checked={ratingValue === rating}
            />
            <span className={ratingValue === rating ? 'selected' : ''}>
              {ratingValue}
            </span>
          </label>
        );
      })}
    </div>
  );

  return (
    <div className="feedback-container">
      <h1>Give Your Feedback</h1>
      {submitted ? (
        <p className="success-message">Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="rating-section">
            <p>Your overall experience with us?</p>
            {renderStars(overallExperience, setOverallExperience)}
          </div>

          <div className="rating-section">
            <p>Friendliness and courtesy shown to you while receiving your vehicle</p>
            {renderStars(friendlinessReceiving, setFriendlinessReceiving)}
          </div>

          <div className="rating-section">
            <p>Friendliness and courtesy shown to you while delivering your vehicle</p>
            <p className="scale-labels">
              <span>POOR</span>
              <span>BEST</span>
            </p>
            {renderScale(friendlinessDelivery, setFriendlinessDelivery)}
          </div>

          <textarea
            placeholder="Any other suggestions?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Submit Your Review</button>
        </form>
      )}
    </div>
  );
}

export default Feedback;
