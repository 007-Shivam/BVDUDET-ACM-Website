import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown, Modal, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BVDUDET_ACM_CHAPTER_LOGO from "../../assets/images/BVDUDET ACM Chapter.png";
import ACM from "../../assets/images/ACM.png";

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewsletter = () => {
    window.open('https://www.google.com/', '_blank');
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={BVDUDET_ACM_CHAPTER_LOGO} alt="BVDUDET ACM Chapter" />{" "}
            BVDUDET ACM STUDENT CHAPTER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/ACM-Women" className="nav-link">
                ACM-W
              </NavLink>
              <NavLink to="/events" className="nav-link">
                Events
              </NavLink>
              <NavLink to="/team" className="nav-link">
                Team
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavLink to="/open-source" className="nav-link">
                  OpenSource
                </NavLink>
              </NavDropdown>
            </Nav>
            <Nav className="btn-lnk">
              <NavLink onClick={handleShow} className="nav-link join-button">
                Join Us
              </NavLink>
            </Nav>
            <Nav className="btn-lnk">
              <NavLink onClick={handleNewsletter} className="nav-link join-button">
                Newsletter
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Buy ACM Membership
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="mt-2 mb-3" src={ACM} alt="ACM" />
          <h4>ACM Student Membership Benefits:</h4>
          <ul>
            <li>
              Digital Library Access: Access scholarly articles and research
              materials.
            </li>
            <li>
              Networking Opportunities: Connect with professionals, researchers,
              and peers.
            </li>
            <li>
              Career Resources: Job boards, webinars, and career guidance.
            </li>
            <li>
              Discounts: Save on conference registrations and publications.
            </li>
            <li>
              Learning Resources: Access online courses, webinars, and
              tutorials.
            </li>
            <li>
              Student Chapters: Join local chapters for community engagement.
            </li>
            <li>
              Career & Job Center: Find job listings and internship
              opportunities.
            </li>
            <li>
              Professional Development: Webinars and workshops for career
              growth.
            </li>
            <li>
              Special Interest Groups (SIGs): Join groups focused on specific
              computing areas.
            </li>
          </ul>

          <p>Enhance your academic and professional journey with ACM!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavbarComponent;
