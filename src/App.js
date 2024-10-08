import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    console.log("Online status:", navigator.onLine);
    if (navigator.onLine) {
      setWarningAlert('');
    } else {
      setWarningAlert('App is currently offline. Only previously cached events will be shown.');
    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className="App">
      <h1>Meet App</h1>
      <div className="alerts-container">
      {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
      {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
      {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      <CitySearch
      allLocations={allLocations}
      setCurrentCity={setCurrentCity} />
      <NumberOfEvents 
      currentNOE={currentNOE} 
      setCurrentNOE={setCurrentNOE} 
      />
      <div className='charts'>
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
