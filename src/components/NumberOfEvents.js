import React, { useState } from 'react';

const NumberOfEvents = ({ updateEvents }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    updateEvents(null, value);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="number-of-events"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
