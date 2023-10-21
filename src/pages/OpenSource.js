import "../styles/OpenSource.scss";
import { Helmet } from "react-helmet";
import { Container, Col, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function OpenSource() {
  const cardDetails = [
    {
      title: "Projects",
      text: "All of our projects are open-source! Literally, all of them.",
      to: "/projects",
    },
    {
      title: "Learning",
      text: "Pick up the skills to write great software.",
      to: "/learning",
    },
    {
      title: "Events",
      text: "We love talking about open-source. Come talk with us!",
      to: "/events",
    },
    {
      title: "Contribute",
      text: "Make your first pull request with us!",
      to: "/contribute",
    },
  ];

  return (
    <>
    <Helmet>
        <title>Open Source - BVDUDET ACM</title>
      </Helmet>
      <div className="page-heading-section">
        <span className="page-heading">We love open-source!</span>
      </div>
      <Container className="open-source">
        <Row xs={1} md={4} className="g-4 mt-2 mb-5">
          {cardDetails.map((card, index) => (
            <Col key={index}>
              <Card as={NavLink} to={card.to}>
                <Card.Body>
                  <Card.Title>
                    {card.title}
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <hr />
      </Container>
    </>
  );
}

export default OpenSource;
