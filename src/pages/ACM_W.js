import { Container, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Women from '../assets/women.jpg'
import '../styles/ACM_W.css'
import W1 from "../assets/w1.png"
import W2 from "../assets/w2.jpg"


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
        <div className="banner">
          <img src={Women} alt="banner" className="img-banner" />
        </div>

        <Row className="about-acm justify-content-between mt-5 mb-5">
          <Col md={5} className="about-acm-logo-container">
            <img className="women-img" src={W1} alt="ACM Logo" />
          </Col>
          <Col md={5}>
            <h1 className="about-title">ACM - W</h1>
            <p className="about-content">
            Much of the work of the ACM-W team relies on sponsorship. 
            This year Google has renewed their support for the ACM-W Scholarships program. 
            Thank you Google! This funding enables applicants to travel to conferences to present their work 
            and to engage with others. Let’s reconnect with the help of the ACM-W. Information on scholarships 
            and how to apply for them can be found below.
            </p>
            <a
              href="https://women.acm.org/scholarships/"
              target="_blank"
              rel="noreferrer"
              className="learn-more"
            >
              Learn More
            </a>
          </Col>
          
        </Row>
        <Row className="about-bvdudet-acm justify-content-between mt-5 mb-5">
        <Col md={5}>
            <h1 className="about-title">BVDUDET ACM - W</h1>
            <p className="about-content">
              The ACM-W team presents a wonderful representation of our members across our regions. 
              We want to continue to represent our regions through engaging at a regional and local level. 
              What better way to promote diversity than to work with us to ensure that we ably represent our members.
            </p>
            <a
              href="https://india.acm.org/"
              target="_blank"
              rel="noreferrer"
              className="learn-more"
            >
              Learn More
            </a>
          </Col>
          <Col md={5} className="about-bvdudet-acm-logo-container">
            <img className="women-img" src={W2} alt="BVDUDET ACM Logo" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ACM_W;
