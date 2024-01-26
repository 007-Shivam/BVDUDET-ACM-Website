import React from 'react'
import './EventCard.css'

export default function EventCard({ eventdata }) {
    return (
        <div class="event">
            <div class="rw-img">
                <img class="ev-img" id='ev-img' src={eventdata.pos} width="150px" height="180px" alt="img" />
            </div>
            <div class="inner">
                <div class="rw-title">
                    <h3 className="ev-title" id='ev-title'>{eventdata.title}</h3>
                    <h3 className="ev-title" id='ev-date'>{eventdata.date}</h3>
                </div>
                <div class="rw-des">
                    <p id="ev-des">
                        {eventdata.des}
                    </p>
                </div>
            </div>
        </div>
    )
}
