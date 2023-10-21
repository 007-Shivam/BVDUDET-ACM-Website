import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Home.scss";
import Slider from "react-slick";
import { HashLink } from "react-router-hash-link";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  const SponsorSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    draggable: false,
    PauseOnHover: false,
    swipe: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 2500,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const Sponsors = [
    {
      name: "Google",
      logo: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
      link: "",
    },
    {
      name: "Amazon",
      logo: "https://press.aboutamazon.in/static-files/3ca754e0-9176-4d89-8174-056267008479",
      link: "",
    },
    {
      name: "Flipkart",
      logo: "https://etimg.etb2bimg.com/photo/102797309.cms",
      link: "",
    },
    {
      name: "TATA",
      logo: "https://cdn.worldvectorlogo.com/logos/tata-1.svg",
      link: "",
    },
    {
      name: "Microsoft",
      logo: "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg",
      link: "",
    },
    {
      name: "IBM",
      logo: "https://elements.cloud/app/uploads/2023/05/ibm-logo-transparent-1024x409.png",
      link: "",
    },
  ];
  return (
    <>
      <Container className="hero-section h-100vh">
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <h1 className="title">
              Welcome to, <br />
              <span className="blue-paint-brush-stroke">
                ACM Student Chapter
              </span>
            </h1>
            <p className="college-name">
              Bharati Vidyapeeth's Department of Engineering and Technology,
              Navi Mumbai
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col lg={10} className="text-center">
            <p className="tagline">
              <Typewriter
                words={[
                  "Code, Connect, Create.",
                  "Transforming Ideas into Impact.",
                  "Empowering Innovators, Connecting Minds.",
                  "Where Code Meets Creativity.",
                ]}
                cursor
                cursorStyle="_"
                loop={0}
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col lg={10} className="text-center">
            <HashLink to="/#footer" className="scroll">
              <FontAwesomeIcon icon={faAngleDoubleDown} />
            </HashLink>
          </Col>
        </Row>
      </Container>
      <Row className="mail-signup-banner justify-content-center">
        <Col lg={4}>
          <h1 className="banner-text">
            Want to stay updated on what`s going on?
          </h1>
        </Col>
        <Col lg={4} className="text-center d-flex justify-content-center">
          <Button className="btn join-btn">Join our Discord server!</Button>
        </Col>
      </Row>
      <Container className="sponsors-container">
        <Row className=" sponsors-container justify-content-center">
          <h1 className="title">Our Sponsors</h1>
          <Slider {...SponsorSettings}>
            {Sponsors.map((sponsor, index) => (
              <Col key={index}>
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="sponsor-logo"
                />
              </Col>
            ))}
          </Slider>
          <p>
            Interested in sponsoring up? Contact Us{" "}
            <Link to={"/about#contact-us"}>right here</Link>
          </p>
        </Row>
      </Container>
    </>
  );
}

export default Home;
