"use client";
import { useRecoilState } from "recoil";
import { Container, Row, Col, Card, Pagination, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Document } from "flexsearch";

import { exploreState, modalState } from "./view.state";
import ImageModal from "../../components/modal";

import data from "./sample-data.json"


export default function Explore() {

  const [_openSidebar, _setOpenSidebar] = useState(true);
  const [page, setPage] = useState(1)
  const [explore, setExplore] = useRecoilState(exploreState);
  const [modal, setModal] = useRecoilState(modalState)
  const [numCards, setNumCards] = useState(12); //Number of cards per page

  const document = new Document({
    document: {
      index: ["ageEnroll", "eTreatEval"],
      store: true
    }
  })

  useEffect(() => {

    data.forEach((item) => {
      document.add({
        id: item.id,
        _image: item._image,
        ageEnroll: item.ageEnroll,
        cervResult: item.cervResult,
        colImpression: item.colImpression,
        dob: item.dob,
        eTreatEval: item.eTreatEval,
        hpvResult: item.hpvResult,
        qcColpoBiopsy: item.qcColpoBiopsy,
        qcCyto: item.qcCyto
      })
    })

    console.log(document)
  }, [])

  function getPages() {
    const paginationItems = []

    for (var i = 1; i <= Math.ceil(data.length / numCards); i++) {
      paginationItems.push(i)
    }
    return paginationItems;
  }


  function showModal(e) {
    const item = e
    console.log(e)

    const body = {
      id: item.id,
      _image: item._image,
      ageEnroll: item.ageEnroll,
      cervResult: item.cervResult,
      colImpression: item.colImpression,
      dob: item.dob,
      eTreatEval: item.eTreatEval,
      hpvResult: item.hpvResult,
      qcColpoBiopsy: item.qcColpoBiopsy,
      qcCyto: item.qcCyto
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
            <article className="shadow px-3 py-2 rounded">
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
                    (e.id < numCards * page) && (e.id >= numCards * (page - 1)) && <Col className="mb-3" lg={6} xl={4}>
                      <Card className="shadow" onClick={() => showModal(e)} style={{ cursor: "pointer" }}>
                        <Card.Img height="368px" variant="top" src={e._image} />
                        <Card.Body>
                          <Card.Text className="d-flex justify-content-center">
                            Sample Card 1
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })}
              </Row>

              <Pagination className="d=flex justify-content-end">
                <Pagination.Prev onClick={() => page > 1 ? setPage(page - 1) : ""} />
                {getPages().map((e) => {
                  return (
                    <Pagination.Item key={e} active={e === page} onClick={() => setPage(e)}>
                      {e}
                    </Pagination.Item>
                  )
                })}
                <Pagination.Next onClick={() => page < getPages().length ? setPage(page + 1) : ""} />
              </Pagination>

            </article>
          </Col>

        </Row>

      </Container>
    </>
  );
}
