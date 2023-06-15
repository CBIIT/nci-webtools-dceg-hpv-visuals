"use client";
import { useRecoilState } from "recoil";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import { SidebarContainer, SidebarPanel, MainPanel } from "../../components/sidebar-container";
import { exploreState, modalState } from "./view.state";

import ExploreTable from "./page.table";
import ExploreForm from "./view.form";
import ImageModal from "../../components/modal";



export default function Explore() {

  const [_openSidebar, _setOpenSidebar] = useState(true);
  const [explore, setExplore] = useRecoilState(exploreState);
  const [modal, setModal] = useRecoilState(modalState)

  function showModal() {
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

    setModal((state) => ({ ...state, body: body, open: true }))
  }

  console.log(explore)

  const data = [
    {
      _id: 0,
      _image: "/images/sample-image.jpg",
      ageEnroll: "18",
      cervResult: "0.8",
      colImpression: "12",
      dob: "1/1/2005",
      eTreatEval: "Good",
      hpvResult: "0.7",
      qcColpoBiopsy: "0.1",
      qcCyto: "0.23"
    },
    {
      _id: 1,
      _image: "/images/sample-hpv-2.jpg",
      ageEnroll: "21",
      cervResult: "Average",
      colImpression: "10",
      dob: "2/1/2002",
      eTreatEval: "Bad",
      hpvResult: "1.2",
      qcColpoBiopsy: "1",
      qcCyto: "2"
    }
  ]


  return (
    <>
      <ImageModal />
      <Container className="py-5">
        <Row>
          <Col>
            <article className="shadow p-4 rounded">
              <h1 className="text-primary h3 mb-4">View Images</h1>
              <hr />
              <Row>
                <Col md={4}>
                  <Card className="shadow" onClick={showModal}>
                    <Card.Img height="368px" variant="top" src={"/images/sample-image.jpg"} />
                    <Card.Body>
                      <Card.Text className="d-flex justify-content-center">
                        Sample Card 1
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="shadow" onClick={showModal}>
                    <Card.Img height="368px" variant="top" src={"/images/sample-hpv-2.jpg"} />
                    <Card.Body>
                      <Card.Text className="d-flex justify-content-center">
                        Sample Card 2
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
