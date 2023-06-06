import { useRecoilState } from "recoil";
import { Container, Row, Col, Card } from "react-bootstrap";
import Sample from "./images/sample-image.jpg";
import ImageModal from "../../components/modal";

import { modalState } from "./explore.state";


export default function Explore() {

  const [modal, setModal] = useRecoilState(modalState)

  function showModal(){
    //Sample body, TBD get metadata of specific image
    const body = {
      ageEnroll: "[ageEnroll]",
      cervResult: "[cervResult]",
      colImpression: "[colImpression]",
      dob: "[dob]",
      eTreatEval: "[eTreatEval]",
      hpvResult: "[hpvResult]",
      qcColpoBiopsy: "[qcColpoBiopsy]",
      qcCyto: "[qcCyto]"
    }

    setModal((state) => ({ ...state, body: body, open: true}))
  }

 
  return (
    <>
      <ImageModal/>
      <Container className="py-5">
        <Row>
          <Col>
            <article className="shadow p-4 rounded">
              <h1 className="text-primary h3 mb-4">Explore HPVAVE</h1>
              <hr />
              <Row>
                <Col md={4}>
                  <Card className="shadow" onClick={showModal} style={{ cursor: "pointer"}}>
                    <Card.Img height="368px" variant="top" src={Sample} />
                    <Card.Body>
                      <Card.Text className="d-flex justify-content-center">
                        Sample Card
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </article>
          </Col>

        </Row>

      </Container>
    </>
  );
}
