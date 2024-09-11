import moment from 'moment';
import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <h3>{event.summary}</h3>
      <p>{moment(event.start.dateTime).format('MMMM Do YYYY, h:mm a')}</p>
      <p>{event.location}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'hide details' : 'show details'}
      </button>
      { showDetails ?  <p role="description" className="event-details">{event.description}</p> : <></>}
    </li>
  );
}

export default Event;
