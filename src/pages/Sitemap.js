import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sitemap() {
  return (
    <>
      <div className="page-heading-section">
        <span className="page-heading">Sitemap</span>
      </div>
      <Container>
        <Row>
          <Col className="mt-3 mb-3">
            <h2>Pages</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ACM-Women">ACM Women</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/open-source">OpenSource</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contribute">Contribute</Link>
              </li>
              <li>
                <Link to="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Sitemap;
