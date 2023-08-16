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
                <Modal.Title>Image {modal.body._id + 1}</Modal.Title>
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
                    <Col md={12} className="px-0">
                        <img className="w-100 h-100" src={modal.body._image} alt={"Image " + modal.body.id}/>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}