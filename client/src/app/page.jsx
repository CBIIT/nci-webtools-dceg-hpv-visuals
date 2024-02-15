"use client";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import { Row, Col, Card, Button } from "react-bootstrap";
import {
  BsFillQuestionCircleFill,
  BsBook,
  BsLightningFill,
  BsBoxArrowUpRight,
} from "react-icons/bs"; // Importing icons

export default function Home() {
  const handleLinkClick = (href) => {
    const confirmed = window.confirm(
      "The link will open a new tab. You can return to this page by clicking on the 'HPV' tab."
    );
    if (confirmed) {
      window.open(href, "_blank");
    }
  };
  return (
    <>
      <div className="bg-primary-dark">
        <div className="cover-image">
          <Container>
            <Row className="py-5">
              <Col className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <h1 className="font-title text-light mb-3">
                    Human Papillomavirus Automated Visual Evaluation (HPV AVE)
                    Tool
                  </h1>
                  {/* <hr className="border-white" /> */}
                  <h2>
                    <p className="lead text-light">
                      Validating a Novel Cervical Screening Strategy
                    </p>
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="bg-light my-5">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={4} className="mb-5 mb-md-0">
              <Link href="/learn-about-pave/testing" className="card-link">
                <Card className="w-100 d-flex flex-column h-100">
                  <div className="card-middle-top-circle">
                    <BsBook size={30} color="#fff" />
                  </div>
                  <Card.Body className="text-center flex-grow-1 d-flex flex-column justify-content-between">
                    <div className="mb-2">
                      <h2 className="h4">About the PAVE Protocol</h2>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-md-0">
              <Link href="/view" className="card-link">
                <Card className="w-100 d-flex flex-column h-100">
                  <div className="card-middle-top-circle">
                    <BsFillQuestionCircleFill size={30} color="#fff" />
                  </div>
                  <Card.Body className="text-center flex-grow-1 d-flex flex-column justify-content-between">
                    <div className="mb-2">
                      <h2 className="h4">Browse Cervical Images</h2>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col xs={12} md={4} className="mb-5 mb-md-0">
              <Link href="/publications" className="card-link">
                <Card className="w-100 d-flex flex-column h-100">
                  <div className="card-middle-top-circle">
                    <BsLightningFill size={30} color="#fff" />
                  </div>
                  <Card.Body className="text-center flex-grow-1 d-flex flex-column justify-content-between">
                    <div className="mb-2">
                      <h2 className="h4">Publications and Lessons Learned</h2>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div>
                This website describes PAVE,
                {/* <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10491363/"
                  target="_blank"
                >
                  {" "}
                  Human Papillomavirus Automated Visual Evaluation, (PAVE) a
                  protocol to evaluate a novel cervical screening and triage
                  protocol <BsBoxArrowUpRight className="ml-1" />
                </a>{" "} */}
                <span
                  className="link-custom"
                  onClick={() =>
                    handleLinkClick(
                      "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10491363/"
                    )
                  }
                >
                  {" "}
                  Human Papillomavirus Automated Visual Evaluation, (PAVE) a
                  protocol to evaluate a novel cervical screening and triage
                  protocol <BsBoxArrowUpRight className="ml-1" />
                </span>{" "}
                for resource-limited settings, including areas with high HIV
                prevalence. PAVE is part of a global strategy to reduce cervical
                cancer burden and part of the NCI Cancer Moonshot.
              </div>
              <div>
                This website was developed for researchers, public health
                workers, clinicians, and others who are interested in learning
                about novel strategies for cervical cancer screening in settings
                with limited resources. This site describes the science
                underlying the PAVE strategy, descriptions of participating
                partners, and an annotated bibliography.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
