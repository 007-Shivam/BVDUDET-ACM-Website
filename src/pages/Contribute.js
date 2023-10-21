import "../styles/Contribute.scss";
import { Container, Row, Col } from "react-bootstrap";

function Contribute() {
  return (
    <>
      <div className="page-heading-section">
        <span className="page-heading">
          Get Started - open source contribution
        </span>
      </div>
      <Container className="contribute">
        <Row className="contribute-content justify-content-center">
          <Col md={10}>
            <h2>what is open source?</h2>
            <p>
              Open source software is code that is made freely available for
              anyone to use or enhance! Here at ACM, we take pride in all of our
              projects being open-source and open for anyone to work on.
            </p>
            <h2>what makes open source possible?</h2>
            <p>
              The main backbone of open source initiatives are tools that
              simplify collaboration and sharing of code. Git and Github are two
              popular tools used by researchers, companies, and students; at
              ACM, we use both.
            </p>
            <h2>how can i contribute?</h2>
            <p>
              We'll quickly go over how we can use git/github to work on some
              open source projects. If you want to learn more about the
              specifics of what we'll cover, you can check out git's
              documentation or our writeups on git workflows and github as a
              collaboration tool to get a closer look at what we're doing!
            </p>
            <h2>jumping into contributing on a project</h2>
            <p>
              There are thousands of open-source projects out there - it's hard
              to even find out where to start! Luckily, some repositories, or
              the main hub of projects, have issues, or project tasks, marked as
              good first issue. These are great starting points for people to
              hop in and contribute!
            </p>
            <h2>contribution workflow</h2>
            <p>
              Repositories normally tell you how the steps you need to take to
              get to work, usually within their README.mdor their
              CONTRIBUTING.md but generally, there's generally a standard couple
              steps you'll have to take. For a detailed contribution guide,
              check out github's contribution guide!
            </p>
            <h2>forking and cloning a repo</h2>
            <p>
              By clicking fork on a project that you want to contribute to,
              GitHub generates a personal copy of that repo under your account.
              To clone it onto your computer, you can click the code button
              above the list of files and run
              <br />
              <code>$ git clone git@github.com:Kamran1819G/opensource.git</code>
              <br />
              to get it onto your machine.
            </p>
            <h2>making a branch</h2>
            <p>
              Generally, when you want to make a specific change to a project,
              you make a branch, so that you can work on a new feature without
              affecting other people's work. To do so, run the{" "}
              <code>git checkout -b BRANCH_NAME</code> command to generate a new
              branch or <code>git checkout BRANCH_NAME</code> to switch between
              branches.
              <br />
              After you've made your changes, run <code>
                git add .
              </code> then{" "}
              <code>git commit -m "a short commit description"</code> to take a
              snapshot of all the changes you've made and git push to push the
              changes you made to GitHub.
            </p>
            <h2>making a pull request</h2>
            <p>
              Now that you've successfully made the changes you want on your
              fork of the project, if you head over to the original project
              repository and click Open a pull request, you can put in a title
              and description of your changes.
              <br />
              After making a pull request, the maintainers of the project will
              check if your code is up to snuff and request changes as
              necessary. Once they approve your changes however, you can merge
              your changes in and you've successfully contributed to the
              project!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contribute;
