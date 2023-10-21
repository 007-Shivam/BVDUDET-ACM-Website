import React from "react";
import { Helmet } from "react-helmet";
import { Row, Container } from "react-bootstrap";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Not found - BVDUDET ACM</title>
      </Helmet>
      <Container>
        <Row className="NotFound-container h-100vh justify-content-center">
          <h1 className="text-center">404 - Page Not Found</h1>
        </Row>
      </Container>
    </>
  );
}

export default NotFound;
