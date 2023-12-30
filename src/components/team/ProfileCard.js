import React from "react";
import "./ProfileCard.scss";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

function ProfileCard({ data }) {
  return (
    <>
      <Card className="profile-card mt-4 text-center">
        <Card.Img className="profile-image mx-auto" src={data.image} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.role}</Card.Text>
          <Col className="profile-social-media">
            <ul className="list-unstyled mx-auto">
              {data.linkedin && (
                <li className="list-inline-item">
                  <a href={data.linkedin} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              )}
              {data.github && (
                <li className="list-inline-item">
                  <a href={data.github} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              )}
              {data.portfolio && (
                <li className="list-inline-item">
                  <a href={data.portfolio} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGlobeAsia} />
                  </a>
                </li>
              )}
            </ul>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProfileCard;
