import React from "react";
import "./Loader.scss";
import { Container, Row, Col } from "react-bootstrap";
import ACMGIF from "../../assets/ACM.gif";

function Loader() {
  return (
    <>
      <Container className="loader-container">
        <Row>
          <Col>
            <img src={ACMGIF} alt="ACM Logo" className="acm-gif" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Loader;
