import { Form, Button } from "react-bootstrap";


export default function ExploreForm(props) {

    return (
        <article className="shadow p-4 rounded">
            <Form.Group className="mb-3" controlId="ageEnroll">
                <Form.Label >Age of Enrollment</Form.Label>
                <Form.Control
                    name="ageEnroll"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cervResult">
                <Form.Label >Worst Cervigram Result</Form.Label>
                <Form.Control
                    name="cervResult"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="colImpression">
                <Form.Label >Worst Colpo Impression</Form.Label>
                <Form.Control
                    name="colImpression"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dob">
                <Form.Label >Date of Birth</Form.Label>
                <Form.Control
                    name="dob"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="eTreatEval">
                <Form.Label >Treatability Evaluation by Expert 1</Form.Label>
                <Form.Control
                    name="eTreatEval"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="hpvResult">
                <Form.Label >Worst HPV Result</Form.Label>
                <Form.Control
                    name="hpvResult"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="qcColpoBiopsy">
                <Form.Label >Worst QC Colpo Biopsy Histology</Form.Label>
                <Form.Control
                    name="qcColpoBiopsy"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="qcCyto">
                <Form.Label >Worst QC ThinPrep Cytology</Form.Label>
                <Form.Control
                    name="qcCyto"
                />
            </Form.Group>

            <div className="text-end">
                <Button type="reset" variant="outline-danger" className="me-1">
                    Reset
                </Button>
                <Button type="submit" variant="primary">
                    Submit
                </Button>
            </div>
        </article >
    )
}