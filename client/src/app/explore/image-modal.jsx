"use client";
import { Modal } from "react-bootstrap";
import { useRecoilState  } from "recoil";
import { modalState } from "./explore.state";

export default function ImageModal() {
    const [modal, setModal] = useRecoilState(modalState)

    function hideModal() {
        setModal((state) => ({ ...state, open: false }));
    }

    return (
        <Modal show={modal.open} size="lg" onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Sample Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
        </Modal>
    )
}