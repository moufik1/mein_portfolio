import React, { useState, useEffect } from 'react';
import './popupmessage.css'; // Import CSS file for styling

const PopupMessage = ({ message, onClose }) => {
  // State to manage visibility of the pop-up
  const [isVisible, setIsVisible] = useState(true);

  // Hide the pop-up after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Notify parent component that the pop-up is closed
    }, 3000);

    // Clear the timer when the component unmounts or visibility changes
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`popup-message ${isVisible ? 'visible' : ''}`}>
      {message}
    </div>
  );
};

export default PopupMessage;
