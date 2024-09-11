import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [number, setNumber] = useState(32);

  const notify = (msg) => toast.error(msg, {toastId: 'numberOfEvents'});
  
  const handleInputChanged = (event) => {
    const val = event.target.value;
    setNumber(val);

    if (val === '' || isNaN(val) || Number(val) <= 0) {
      notify("Only positive numbers are allowed");
      //setErrorAlert("Only positive numbers are allowed");
      setCurrentNOE(32);
    } else {
      // setErrorAlert("");
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
