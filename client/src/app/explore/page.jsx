"use client";
import { useRecoilState } from "recoil";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import { SidebarContainer, SidebarPanel, MainPanel } from "../../components/sidebar-container";
import { exploreState } from "./explore.state";

import ExploreTable from "./page.table";
import ExploreForm from "./explore.form";


export default function Explore() {

  const [_openSidebar, _setOpenSidebar] = useState(true);
  const [explore, setExplore] = useRecoilState(exploreState);

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
      <Container className="py-5">
        <Row>
          <SidebarContainer collapsed={!_openSidebar} onCollapsed={() => _setOpenSidebar(!_openSidebar)}>
            <SidebarPanel>
              <ExploreForm/>
            </SidebarPanel>
            <MainPanel>
              <Col>
                <article className="shadow p-4 rounded">
                  <h1 className="text-primary h3 mb-4">Explore HPVAVE</h1>
                  <hr />
                  <Row>
                    <Col md={8}>
                      <img src={explore._image} className="w-100"/>
                    </Col>
                    <Col className="mb-3" md={4}>
                      <div>Age of Enrollment: {explore.ageEnroll}</div>
                      <div>Worst Cervigram Result: {explore.cervResult}</div>
                      <div>Worst Colpo Impression: {explore.colImpression}</div>
                      <div>Date of Birth: {explore.dob}</div>
                      <div>Treatability Evaluation by Expert 1: {explore.eTreatEval}</div>
                      <div>Worst HPV Result: {explore.hpvResult}</div>
                      <div>Worst QC Colpo Biopsy Histology: {explore.qcColpoBiopsy}</div>
                      <div>Worst QC ThinPrep Cytology: {explore.qcCyto}</div>
                    </Col>
                    <ExploreTable results={data} />
                  </Row>
                </article>
              </Col>
            </MainPanel>
          </SidebarContainer>
        </Row>

      </Container>
    </>
  );
}
