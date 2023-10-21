import '../styles/Events.scss'
import { Container, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

function Events() {
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
    </>
  );
}

export default Events;
