import React from 'react';

const EventModal = ({data, onClose}) => {
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">
        <h2>Tour Details</h2>
        <p>Date: {data.date.toDateString()}</p>
        <p>Details: {JSON.stringify(data.tours)}</p>
        <button onClick={() => (window.location.href = data.url)}>
          Schedule a Tour
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </>
  );
};

export default EventModal;
