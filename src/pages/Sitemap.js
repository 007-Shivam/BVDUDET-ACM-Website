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
                <Link>Home</Link>
              </li>
              <li>
                <Link>ACM Women</Link>
              </li>
              <li>
                <Link>Team</Link>
              </li>
              <li>
                <Link>Events</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>OpenSource</Link>
              </li>
              <li>
                <Link>Exibition</Link>
              </li>
              <li>
                <Link>Sitemap</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Sitemap;
