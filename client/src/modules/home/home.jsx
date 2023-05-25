import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-primary-dark">
        <div className="cover-image">
          <Container>
            <Row>
              <Col md={6}>
                <div className="d-flex h-100 align-items-center py-5">
                  <div>
                    <h1 className="font-title text-light mb-3">HPVAVE</h1>
                    <hr className="border-white" />
                    <p className="lead text-light">Explore clinical examples of HPV-associated cancers and precancers.</p>
                    <Link to="/explore" className="btn btn-lg btn-outline-light text-decoration-none">
                      Explore Cases
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="bg-light py-5">
        <Container>
          <Row>
            <Col>
              <p>
                The Human Papillomavirus Automated Visual Evaluation (HPVAVE) website provides visual examples of the natural history/carcinogenic process of
                HPV infection and progression to precancer, accompanied by relevant clinical data. This platform addresses a significant gap in clinical
                comprehension of the carcinogenic process and provides exposure to images that are true representations of meaningful changes in the appearance
                of the cervix that require clinical action.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
