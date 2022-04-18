import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  // declaring react state
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  // to add new event
  const addEvent = (event) => {
    //using the setEvent state to add prevEvents to the list
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    // to close the modal after submitting the event
    setShowModal(false)
  }

  const handleClick = (id) => {
    // using event id to delete events
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        // delete event if id clicked = event id
        return id !== event.id
      })
    })
    console.log(id)
  }

  const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">

      <Title title="Events in Your Area" subtitle={subtitle} />

      {/*toggling between show events and hide events */}
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {/* adding props to component to use them in another file */}
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {/* to add new event from NewEventForm */}
      {showModal &&
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      }

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
