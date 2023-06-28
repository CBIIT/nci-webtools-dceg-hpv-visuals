"use client";
import { Modal, Row, Col } from "react-bootstrap";
import { useRecoilState  } from "recoil";
import { modalState } from "../app/view/view.state";

export default function ImageModal() {
    const [modal, setModal] = useRecoilState(modalState)

    function hideModal() {
        setModal((state) => ({ ...state, open: false }));
    }

    return (
        <Modal show={modal.open} size="xl" onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Image {modal.body.id + 1}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-0 pb-0">
                <ul>
                    <li>Age at First Enrollment Date: {modal.body.ageEnroll}</li>
                    <li>Worst Cervigram Result: {modal.body.cervResult}</li>
                    <li>Worst Colpo Impression: {modal.body.colImpression}</li>
                    <li>Date of Birth: {modal.body.dob}</li>
                    <li>Treatment Evaluation by Expert 1: {modal.body.eTreatEval}</li>
                    <li>Worst HPV result: {modal.body.hpvResult}</li>
                    <li>Worst QC Colpo Biopsy Histology: {modal.body.qcColpoBiopsy}</li>
                    <li>Worst QC ThinPrep Cytology: {modal.body.qcCyto}</li>
                </ul>
                <Row className="mx-0" style={{ backgroundColor: "#20094b"}}>
                    <Col md={6} className="px-0">
                        <img className="w-100 h-100" src={modal.body._image} alt={"Image " + modal.body.id}/>
                    </Col>
                    <Col md={6} className="p-3 text-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}