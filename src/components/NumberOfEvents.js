import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);
  
  const handleInputChanged = (event) => {
    const val = event.target.value;
    setNumber(val);

    if (val === '' || isNaN(val) || Number(val) <= 0) {
      setErrorAlert("Only positive numbers are allowed");
      setCurrentNOE(32);
    } else {
      setErrorAlert("");
      setCurrentNOE(Number(val));
    }
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
