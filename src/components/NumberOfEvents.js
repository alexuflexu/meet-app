import React, { useState } from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const handleInputChanged = (event) => {
    const value = parseInt(event.target.value, 10) || 32;
    setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="number-of-events"
        value={currentNOE}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
