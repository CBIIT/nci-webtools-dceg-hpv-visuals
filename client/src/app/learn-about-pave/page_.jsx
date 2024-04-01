"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table } from "react-bootstrap";
import Image from "next/image"; // Import the Image component from next/image
import learnAboutMapImg from "../../../public/images/learn-about-map.png";
import learnAboutWorldMapImg from "../../../public/images/learn-about-worldmap.png";

export default function About() {
  return (
    <Container className="py-3">
      <article className="shadow p-4 rounded">
        <h1 className="text-primary mb-3">About the PAVE Protocol </h1>
        <hr />
        <Row>
          <Col xs={12}>
            <div className="mb-2">
              The PAVE protocol aims to target cervical precancer accurately and
              affordably by 1) self-collection of samples for HPV screening; 2)
              triage among HPV-positive participants by combination of extended
              genotyping and visual evaluation of the cervix using
              deep-learning-based Automated Visual Evaluation (AVE); and 3)
              treatment using thermal ablation or excision (Large Loop Excision
              of the Transformation Zone) (LLETZ).
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="mb-2">
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S1877782123000498?via%3Dihub"
                target="_blank"
              >
                PAVE utilizes risk-based management for patients in low- and
                middle-income countries based on their short-term risk of
                precancer/cancer.
              </a>{" "}
              This approach minimizes overtreatment in low-risk patients and
              optimizes treatment resources for high-risk patients.{" "}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="d-flex justify-content-center mt-3 mb-3">
              <figure className="text-center">
                <Image
                  src={learnAboutMapImg}
                  alt="This figure depicts the steps that a patient would experience. First, HPV testing. Patients testing negative are reassured. Patients testing HPV positive undergo Automated Visual Evaluation (AVE) and AVE information is combined with HPV genotyping information to determine the risk of precancer. Patients are then directed to treatment or surveillance]"
                  width={500}
                  height={300}
                  layout="responsive"
                  className="img-fluid mx-auto"
                />
                <figcaption className="mt-2">
                  <b>Participant experience map.</b>
                </figcaption>
              </figure>
            </div>
          </Col>
        </Row>

        <h2 className="mb-2">Who We Are</h2>
        <h3 className="mb-2">NCI team </h3>
        <Row>
          <Col xs={12}>
            <div className="mb-3">
              The NCI team is led by Dr. Mark Schiffman and Dr. Silvia de
              Sanjose. The NCI provides sites with laboratory materials and
              epidemiologic and statistical support. Each site is responsible
              for its own clinical protocol, including recruitment, informed
              consent, testing, and clinical management of patients. Sites share
              data with NCI to evaluate the effectiveness of the PAVE protocol
              in diverse settings.{" "}
            </div>
          </Col>
        </Row>
        <h2 className="mb-2">Members of the PAVE Consortium </h2>
        <Row>
          <Col xs={12}>
            <div className="mb-3">
              PAVE is a multi-site collaboration between NCI and participating
              countries. PAVE is underway in nine countries: Brazil, Cambodia,
              Dominican Republic, El Salvador, Eswatini, Honduras, Malawi,
              Nigeria, and Tanzania.{" "}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="table-responsive">
              <Table bordered>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Project location(s)</th>
                    <th scope="col">Populations type(s)</th>
                    <th scope="col">Current screening system</th>
                    <th scope="col">Current Treatment system</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brazil</td>
                    <td>Manaus, Brazilia</td>
                    <td>
                      Underscreened, high-risk areas supplemented with
                      colposcopy referral clinics
                    </td>
                    <td>Cytology and colposcopy for ASCUS+</td>
                    <td>LLETZ for CIN2+</td>
                  </tr>
                  <tr>
                    <td>Cambodia</td>
                    <td>Takeo</td>
                    <td>Factory workers and HIV clinics</td>
                    <td>VIA</td>
                    <td>
                      Ablation for VIA-positive, LLETZ if ineligible for
                      ablation
                    </td>
                  </tr>
                  <tr>
                    <td>Dominican Republic</td>
                    <td>Santo Domingo. Distrito Nacional</td>
                    <td>HIV clinics</td>
                    <td>Cytology and Colposcopy for ASCUS+</td>
                    <td>
                      Ablation with cryotherapy for CIN2+, LLETZ or cone
                      excision if ineligible for ablation
                    </td>
                  </tr>
                  <tr>
                    <td>El Salvador</td>
                    <td>San Salvador</td>
                    <td>Community-based clinics</td>
                    <td>HPV testing (provider collected CareHPV)</td>
                    <td>
                      Ablation for all HPV-positive, LLETZ if ineligible for
                      ablation
                    </td>
                  </tr>
                  <tr>
                    <td>Eswatini</td>
                    <td>Sithobela village and Manzini city</td>
                    <td>
                      Sithobela health center,Raleigh Fitkin Memorial Hospital
                    </td>
                    <td>VIA</td>
                    <td>
                      Ablation for VIA-positive, LLETZ if ineligible for
                      ablation
                    </td>
                  </tr>
                  <tr>
                    <td>Honduras</td>
                    <td>Tegucigalpa</td>
                    <td>Community-based</td>
                    <td>VIA</td>
                    <td>
                      Ablation for VIA-positive, LLETZ if ineligible for
                      ablation
                    </td>
                  </tr>
                  <tr>
                    <td>Malawi</td>
                    <td>Blantyre and Chiradzulu district</td>
                    <td>
                      Ten health centers and their catchment area supported by
                      MSF
                    </td>
                    <td>HPV testing and VIA</td>
                    <td>
                      Ablation for HPV-positive, VIA-positive, LLETZ if
                      ineligible for ablation
                    </td>
                  </tr>
                  <tr>
                    <td>Nigeria</td>
                    <td>
                      Irewole and Isokan local government areas of Osun state
                    </td>
                    <td>Community-based</td>
                    <td>HPV testing and colposcopy for HPV-positive</td>
                    <td>LLETZ for CIN2+</td>
                  </tr>
                  <tr>
                    <td>Tanzania</td>
                    <td>Kilimanjaro region</td>
                    <td>Community-based and hospital-based</td>
                    <td>VIA </td>
                    <td>
                      Ablation for VIA-positive, LLETZ if ineligible for
                      ablation{" "}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="d-flex justify-content-center mt-3 mb-3">
              <figure className="text-center">
                <Image
                  src={learnAboutWorldMapImg}
                  alt="Map of the world showing the geographical locations of PAVE member sites."
                  width={500}
                  height={300}
                  layout="responsive"
                  className="img-fluid"
                />
                <figcaption className="mt-2">
                  <b>Map of the world showing PAVE sites</b>
                </figcaption>
              </figure>
            </div>
          </Col>
        </Row>
      </article>
    </Container>
  );
}
