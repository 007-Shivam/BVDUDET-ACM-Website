import { useState } from "react";
import "../styles/RSVP.scss";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import BVDUDETACMLOGO from "../assets/images/BVDUDET ACM Chapter.png";

function RSVPPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="page-heading-section">
        <span className="page-heading">RSVP for Event</span>
      </div>
      <Container>
        <Row>
          <Col lg={6} className="rsvp-img-container mt-4 mb-4">
            <div className="d-flex justify-content-center">
              <img class="rsvp-img" src={BVDUDETACMLOGO} alt="BVDUDET ACM Logo" border="0" />
            </div>
          </Col>
          <Col lg={6} className="mt-4 mb-4">
            <Form className="rsvp-form" noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <FloatingLabel label="First Name">
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel label="Last Name">
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
              </Row>
              <Col className="mb-3">
                <FloatingLabel label="Email address" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col className="mb-3">
                <FloatingLabel label="Can you attend?" as={Col}>
                  <Form.Select required>
                    <option value="Yes">Yes, I'll be there</option>
                    <option value="No">Sorry, Can't make it</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col className="mb-3">
                <FloatingLabel
                  label="How did you hear about this event?"
                  as={Col}
                >
                  <Form.Select>
                    <option value="Null">Select</option>
                    <option value="Friend">Friend</option>
                    <option value="Website">Website</option>
                    <option value="Social-Media">Social Media</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RSVPPage;
