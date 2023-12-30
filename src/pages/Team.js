import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/Team.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import ProfileCard from "../components/team/ProfileCard";

import FacultyJSON from "../JSON/Team2023-24/FacultyProfiles.json";
import CoordinatorsJSON from "../JSON/Team2023-24/CoordinatorProfiles.json";
import TechnicalTeamJSON from "../JSON/Team2023-24/TechnicalTeamProfiles.json";
import WebsiteTeamJSON from "../JSON/Team2023-24/WebsiteTeamProfiles.json";
import DesignTeamJSON from "../JSON/Team2023-24/DesignTeamProfiles.json";
import OrganizingTeamJSON from "../JSON/Team2023-24/OrganizingTeamProfiles.json";
import MarketingTeamJSON from "../JSON/Team2023-24/MarkingTeamProfiles.json";

function Team() {
  const [Faculty, setFaculty] = useState([]);
  const [Coordinators, setCoordinators] = useState([]);
  const [TechnicalTeam, setTechnicalTeam] = useState([]);
  const [WebsiteTeam, setWebsiteTeam] = useState([]);
  const [DesignTeam, setDesignTeam] = useState([]);
  const [OrganizingTeam, setOrganizingTeam] = useState([]);
  const [MarketingTeam, setMarketingTeam] = useState([]);

  useEffect(() => {
    setFaculty(FacultyJSON);
  }, []);

  useEffect(() => {
    setCoordinators(CoordinatorsJSON);
  }, []);

  useEffect(() => {
    setTechnicalTeam(TechnicalTeamJSON);
  }, []);

  useEffect(() => {
    setWebsiteTeam(WebsiteTeamJSON);
  }, []);

  useEffect(() => {
    setDesignTeam(DesignTeamJSON);
  }, []);

  useEffect(() => {
    setOrganizingTeam(OrganizingTeamJSON);
  }, []);

  useEffect(() => {
    setMarketingTeam(MarketingTeamJSON);
  }, []);

  return (
    <>
      <Helmet>
        <title>Team - BVDUDET ACM</title>
      </Helmet>
      <div className="page-heading-section">
        <span className="page-heading">Meet Our TEAM</span>
      </div>
      <Container>
        <Tabs
          defaultActiveKey="2023-24"
          className="mt-4 mb-3 justify-content-center"
        >
          <Tab eventKey="2023-24" title="2023-24">
            <Tabs
              defaultActiveKey="Faculty"
              className="justify-content-center"
            >
              <Tab eventKey="Faculty" title="Faculty">
                <Row>
                  {Faculty.map((item) => (
                    <Col lg={3} key={item} className="ml-auto mr-auto">
                      <ProfileCard key={item} data={item} />
                    </Col>
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="Co-ordinators" title="Co-ordinators">
                <Row>
                  {Coordinators.map((item) => (
                    <Col lg={3} key={item} className="ml-auto mr-auto">
                      <ProfileCard key={item} data={item} />
                    </Col>
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="Technical Team" title="Technical Team">
                <Row>
                  {TechnicalTeam.map((item) => (
                    <Col lg={3} key={item} className="ml-auto mr-auto">
                      <ProfileCard key={item} data={item} />
                    </Col>
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="Website Team" title="Website Team">
                <Row>
                  {WebsiteTeam.map((item) => (
                    <Col lg={3} key={item} className="ml-auto mr-auto">
                      <ProfileCard key={item} data={item} />
                    </Col>
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="Design Team" title="Design Team">
                <Row>
                  {DesignTeam.map((item) => (
                    <Col lg={3} key={item} className="ml-auto mr-auto">
                      <ProfileCard key={item} data={item} />
                    </Col>
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="Organizing Team" title="Organizing Team">
                <Row>
                  {OrganizingTeam.map((item) => (
                    <Col lg={3} key={item} className="ml-auto mr-auto">
                      <ProfileCard key={item} data={item} />
                    </Col>
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="Marketing Team" title="Marketing Team">
                <Row>
                  {MarketingTeam.map((item) => (
                    <Col lg={3} key={item} className="ml-auto mr-auto">
                      <ProfileCard key={item} data={item} />
                    </Col>
                  ))}
                </Row>
              </Tab>
            </Tabs>
          </Tab>
          <Tab eventKey="2024-25" title="2024-25">
            Next Team Comming soon...
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default Team;
