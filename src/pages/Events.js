import '../styles/Events.scss'
import { Container, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Media } from '../assets/gallery';
import React, { useState } from 'react'


function Events() {
  const [file, setFile] = useState(null);

  return (
    <>
      <Helmet>
        <title>Events - BVDUDET ACM</title>
      </Helmet>
      <div className="page-heading-section">
        <span className="page-heading">Our Events</span>
      </div>
      <Container className="h-100vh">
        <Col md={12} className="mt-4 mb-4">
          <h4>
            Take a look at our fancy calendar. An updated google calendar of
            events is in the works!
          </h4>
          <iframe
          className="mt-3"
            title="ACM BVUDET Student Chapter Events Calendar"
            src="https://calendar.google.com/calendar/embed?src=acmbvudet%40gmail.com&ctz=Asia%2FKolkata"
            style={{ border: "0", width: "100%", height: "80vh" }}
            frameborder="0"
          ></iframe>
        </Col>
      </Container>
      <Container className="h-100vh">
        <Col lg={12} className="mt-4 mb-4">
          <h1>Past Events</h1>
        </Col>
      </Container>

      <Container>
      <div className='gal-container'>
            <div className="media-container">
                {
                    Media.map((file, index) => (
                        <div className="media" key={index} onClick={() => setFile(file)}>
                            {
                                file.type === 'image'
                                    ? <img src={file.url} alt="" />
                                    : <video src={file.url} muted />}
                        </div>
                    ))
                }
            </div>

            <div className="popup-media" style={{display: file ? 'block' : 'none'}}>
                <span onClick={() => setFile(null)}>&times; </span>
                {
                    file?.type === 'video'
                        ? <video src={file?.url} muted autoPlay controls />
                        : <img src={file?.url} alt='' />
                }
            </div>
        </div>
      </Container>
    </>
  );
}

export default Events;
