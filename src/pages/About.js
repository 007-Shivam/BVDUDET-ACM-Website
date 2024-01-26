import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/About.scss";
import ACMLogo from "../../src/assets/images/ACM.png";
import BVDUDETACMLogo from "../../src/assets/images/BVDUDET ACM Chapter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Helmet>
        <title>About - BVDUDET ACM</title>
      </Helmet>
      <div className="page-heading-section">
        <span className="page-heading">
          About Us - ACM BVUDET Student Chapter
        </span>
      </div>
      <Container>
        <Row className="about-acm justify-content-between mt-5 mb-5">
          <Col md={5} className="about-acm-logo-container">
            <img src={ACMLogo} alt="ACM Logo" />
          </Col>
          <Col md={5}>
            <h1 className="about-title">ACM</h1>
            <p className="about-content">
              ACM is the world's largest educational and scientific computing
              society, aimed at increasing the level and visibility of ACM
              activities across the globe. ACM is a society of dedicated
              professionals, academicians, and research scientists, who
              contribute towards the growth of technological innovations. The
              purpose of Society is to inculcate computational thinking aiding
              in career development and a lifelong learning experience.
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
        </Row>
        <Row className="about-bvdudet-acm justify-content-between mt-5 mb-5">
        <Col md={5}>
            <h1 className="about-title">BVDUDET ACM</h1>
            <p className="about-content">
              ACM is the world's largest educational and scientific computing
              society, aimed at increasing the level and visibility of ACM
              activities across the globe. ACM is a society of dedicated
              professionals, academicians, and research scientists, who
              contribute towards the growth of technological innovations. The
              purpose of Society is to inculcate computational thinking aiding
              in career development and a lifelong learning experience.
            </p>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="learn-more"
            >
              Learn More
            </a>
          </Col>
          <Col md={5} className="about-bvdudet-acm-logo-container">
            <img className="about-logo" src={BVDUDETACMLogo} alt="BVDUDET ACM Logo" />
          </Col>
        </Row>
        <hr className="mt-5 mb-5" />
        <Row className="contact-us justify-content-between" id="contact-us">
          <h1>Contact Us</h1>
          <Col md={5} className="mt-5">
            <h2>Reach Us</h2>
            <p className="contact-us-email">
              <FontAwesomeIcon icon={faEnvelope} /> bvdudet.acm@gmail.com
            </p>
            <div className="contact-us-location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.799925472132!2d73.05603407489873!3d19.028535982166375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c38a077ce761%3A0x2133ad39bcf67618!2sBharati%20Vidyapeeth%20Deemed%20To%20be%20University%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1697221472495!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                title="BVDUDET Location"
              ></iframe>
            </div>
          </Col>
          <Col as={Row} md={6} className="sponsorship-contact text-center mt-5">
          <Col md={12}>
              <h2>Our Socials</h2>
              <ul className="list-unstyled socials">
                <li className="list-inline-item">
                  <Link to="https://www.instagram.com/acm_bvdudet?igsh=aXJtaGY4c3U1ZHpu">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="https://www.instagram.com/acm_bvdudet?igsh=aXJtaGY4c3U1ZHpu">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="https://youtube.com/@BharatiVidyapeethDET-NM?si=NJ2634cIkU8O1cMx">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="https://www.linkedin.com/in/acm-bvdudet-364009294/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
              </ul>
            </Col>
            <hr className="mb-5" />
            <h2>Contact for sponsorship</h2>
            <Col md={6}>
              <h4 className="name">Fahim Khan</h4>
              <p className="designation">Secretary</p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> FahimKhan@acm.org
              </p>
            </Col>
            <Col md={6}>
              <h4 className="name">Kashish Durgapal</h4>
              <p className="designation">Publicity Head</p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> Kashish@acm.org
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
