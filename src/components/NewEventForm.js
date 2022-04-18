import './NewEventForm.css'
import React, { useState } from 'react'

const NewEventForm = ({ addEvent }) => {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] =useState("manchester")
    // to set the form title and date to empty strings
    const resetForm = () => {
        setTitle("")
        setDate("")
        setLocation("manchester")
    }
    // to submit form
    const handleSubmit = (e) => {
        e.preventDefault()
        // out put a new list to the screen with an id
        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        console.log(event)

        addEvent(event)
        // to reset the form after submit
        resetForm()
    }

    return (
        <form className="new-event-form" onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Event Date:</span>
                <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </label>
            {/* select box input field */}
            <label>
                <span>Event Location:</span>
                <select onChange={(e) => setLocation(e.target.value)}>
                    <option value="manchester">Manchester</option>
                    <option value="london">London</option>
                    <option value="cardiff">Cardiff</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default NewEventForm