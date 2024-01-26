import '../styles/Events.scss';
import { Container, Button, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import EventCard from '../components/event/EventCard';
import Upcoming from '../JSON/Events/Upcoming.json'; // Import your JSON data
import Past from '../JSON/Events/Past.json'; // Import your JSON data

function Events() {
  const [pastEventsToShow, setPastEventsToShow] = useState(3); // Number of past events to show initially

  const handleLoadMore = () => {
    setPastEventsToShow(prevCount => prevCount + 3); // Increase count by 3 on button click
  };

  const handleTabChange = (key) => {
    if (key === 'Upcoming') {
      setPastEventsToShow(3);
    }
  };

  return (
    <>
      <Helmet>
        <title>Events - BVDUDET ACM</title>
      </Helmet>
      <div className="page-heading-section">
        <span className="page-heading">Our Events</span>
      </div>

      <Container>
        <Tabs defaultActiveKey="Upcoming" className="mt-4 mb-3 justify-content-center" onSelect={handleTabChange}>
          <Tab eventKey="Upcoming" title="Upcoming Events">
            {Upcoming.length > 0 ? (
              Upcoming.map((eventData, index) => (
                <EventCard key={index} eventdata={eventData} />
              ))
            ) : (
              <Container>
                <Row className="NotFound-container h-30vh justify-content-center">
                  <h1 className="text-center">Stay tuned for upcoming events!</h1>
                </Row>
              </Container>
            )}
          </Tab>


          <Tab eventKey="Past" title="Past Events">
            {Past.slice(0, pastEventsToShow).map((eventData, index) => (
              <EventCard key={index} eventdata={eventData} />
            ))}
            {Past.length > pastEventsToShow && (
              <div className="text-center mt-3">
                <Button onClick={handleLoadMore}>Load More</Button>
              </div>
            )}
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default Events;
