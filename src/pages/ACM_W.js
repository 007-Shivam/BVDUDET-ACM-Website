import { Container, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

function ACM_W() {
  return (
    <>
      <Helmet>
        <title>ACM Women - BVDUDET ACM</title>
      </Helmet>
      <div className="page-heading-section">
        <span className="page-heading">
          Association for Computing Machinery - Women
        </span>
      </div>
      <Container>
        <Col lg={12} className="mt-4 mb-4"></Col>
      </Container>
    </>
  );
}

export default ACM_W;
