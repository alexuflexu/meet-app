import React, { useState } from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const [number, setNumber] = useState(32);
  const [errorText, setErrorText] = useState('');
  
  const handleInputChanged = (event) => {
    const val = event.target.value;
    setNumber(val);

    if (val === '' || isNaN(val) || Number(val) <= 0) {
      setCurrentNOE(val);
      setErrorText("Number of Events should be a positive number");
    } else {
      setErrorText("");
    }

    setCurrentNOE(val);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="number-of-events"
        value={number}
        onChange={handleInputChanged}
      />
      {errorText && <p style={{color: 'red'}}>{errorText}</p>}
    </div>
  );
};

export default NumberOfEvents;
