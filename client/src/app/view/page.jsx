"use client";
import { useRecoilState } from "recoil";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Document } from "flexsearch";

import { exploreState, modalState } from "./view.state";
import ImageModal from "../../components/modal";

import data from "./sample-data.json"


export default function Explore() {

  const [_openSidebar, _setOpenSidebar] = useState(true);
  const [explore, setExplore] = useRecoilState(exploreState);
  const [modal, setModal] = useRecoilState(modalState)
  const document = new Document({
    document: {
      index: ["ageEnroll", "eTreatEval"],
      store: true
    }
  })

  console.log(data)

  useEffect(() => {
    data.forEach((item) => {
      document.add({
        id: item.id,
        ageEnroll: item.ageEnroll,
        eTreatEval: item.eTreatEval

      })
    })

    console.log(document)
  }, [])



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

  function handleSearch(e) {
    e.preventDefault();
    console.log(e.target.value)
    console.log(document.search(e.target.value, { enrich: true }))
  }


  return (
    <>
      <ImageModal />
      <Container className="py-5">
        <Row>
          <Col>
            <article className="shadow p-4 rounded">
              <h1 className="text-primary h3 mb-4">View Images</h1>
              {/*<Form.Group className="mb-3" controlId="ageEnroll">
                <Form.Label >Search</Form.Label>
                <Form.Control
                  name="ageEnroll"
                  onChange={handleSearch}
                />
  </Form.Group>*/}
              <hr />
              <Row>
                {data.map((e) => {
                  return (
                    <Col sm={6} md={4}>
                      <Card className="shadow" onClick={showModal}>
                        <Card.Img height="368px" variant="top" src={e._image} />
                        <Card.Body>
                          <Card.Text className="d-flex justify-content-center">
                            Sample Card 1
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })
                }
              </Row>
            </article>
          </Col>

        </Row>

      </Container>
    </>
  );
}
