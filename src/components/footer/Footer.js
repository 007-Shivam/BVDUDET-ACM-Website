import { Col, Container, Row } from "react-bootstrap";
import "./Footer.scss";
import { Link } from "react-router-dom";
import ACMFooterLogo from "../../assets/images/ACM.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedin,
  faFacebookF,
  faInstagram,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <Container className="footer-container mt-5 mb-3">
        <Row className="justify-content-between">
          <Col lg={4}>
            <img src={ACMFooterLogo} alt="ACM Logo" />
          </Col>
          <Col className="quick-links" lg={4}>
            <h3 className="text-center">Quick Links</h3>
            <ul className="list-unstyled text-center">
              <li>
                <Link to="/sitemap">sitemap</Link>
              </li>
            </ul>
          </Col>
          <Col className="follow-us" lg={4}>
            <h3 className="text-center">Follow Us</h3>
            <ul className="list-unstyled text-center">
              <li className="list-inline-item">
                <Link to="https://www.linkedin.com/in/acm-bvdudet-364009294/">
                <FontAwesomeIcon icon={faDiscord} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="https://youtube.com/@BharatiVidyapeethDET-NM?si=NJ2634cIkU8O1cMx">
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="https://www.linkedin.com/in/acm-bvdudet-364009294/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="https://www.instagram.com/acm_bvdudet?igsh=aXJtaGY4c3U1ZHpu">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="https://www.instagram.com/acm_bvdudet?igsh=aXJtaGY4c3U1ZHpu"> 
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
