"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table } from "react-bootstrap";
import Image from "next/image"; // Import the Image component from next/image
import genderImg from "../../../public/images/gender.png";
import AveAlgorithm from "../../../public/images/AVE-algorithm.png";
import learnAboutMapImg from "../../../public/images/learn-about-map.png";
import learnAboutWorldMapImg from "../../../public/images/learn-about-worldmap.png";
import { BsBoxArrowUpRight } from "react-icons/bs"; // Importing icons

export default function AboutTesting() {
  return (
    <Container className="py-3">
      <article className="shadow p-4 rounded">
        <div>
          <h1 className="text-primary mb-3">About the PAVE Protocol </h1>
          <hr />
          <Row>
            <Col xs={12}>
              <div className="mb-2">
                The PAVE protocol aims to target cervical precancer accurately
                and affordably by 1) self-collection of samples for HPV
                screening; 2) triage among HPV-positive participants by
                combination of extended genotyping and visual evaluation of the
                cervix using deep-learning-based Automated Visual Evaluation
                (AVE); and 3) treatment using thermal ablation or excision
                (Large Loop Excision of the Transformation Zone) (LLETZ).
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
                  precancer/cancer <BsBoxArrowUpRight className="ml-1" />.
                </a>{" "}
                This approach minimizes overtreatment in patients with low risk
                of cervical precancer or cancer and optimizes treatment
                resources for patients at high risk of having cervical precancer
                or developing cervical cancer. {"  "}
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S1877782123000498?via%3Dihub"
                  target="_blank"
                >
                  Read the manuscript on risk-based cervical screening in
                  resource-limited settings{" "}
                  <BsBoxArrowUpRight className="ml-1" />.
                </a>{" "}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="d-flex justify-content-center mt-3 mb-3">
                <figure className="text-center">
                  <div className="image-container">
                    <Image
                      src={learnAboutMapImg}
                      alt="This figure depicts the steps that a patient would experience. First, HPV testing. Patients testing negative are reassured. Patients testing HPV positive undergo Automated Visual Evaluation (AVE) and AVE information is combined with HPV genotyping information to determine the risk of precancer. Patients are then directed to treatment or surveillance"
                      title=""
                      width={500}
                      height={300}
                      layout="responsive"
                      className="img-fluid mx-auto"
                    />
                    <p className="title-text">
                      This figure depicts the steps that a patient would
                      experience. First, HPV testing. Patients testing negative
                      are reassured. Patients testing HPV positive undergo
                      Automated Visual Evaluation (AVE) and AVE information is
                      combined with HPV genotyping information to determine the
                      risk of precancer. Patients are then directed to treatment
                      or surveillance
                    </p>
                  </div>
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
                Sanjose. The NCI provides consortium members with laboratory
                materials and epidemiologic and statistical support. Each
                consortium member is responsible for its own clinical protocol,
                including recruitment, informed consent, testing, and clinical
                management of patients. Consortium members share data with NCI
                to evaluate the effectiveness of the PAVE protocol in diverse
                settings.{" "}
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
                  <div className="image-container">
                    <Image
                      src={learnAboutWorldMapImg}
                      alt="Map of the world showing the geographical locations of PAVE member sites."
                      title=""
                      width={500}
                      height={300}
                      layout="responsive"
                      className="img-fluid"
                    />
                    <p className="title-text">
                      Map of the world showing the geographical locations of
                      PAVE member sites.
                    </p>
                  </div>
                  <figcaption className="mt-2">
                    <b>Map of the world showing PAVE sites</b>
                  </figcaption>
                </figure>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <h1 className="text-primary mb-3">Testing in PAVE </h1>
          <span>
            PAVE utilizes HPV and automated visual evaluation to estimate risk
            of cervical cancer.
          </span>

          <div className="my-3">
            <h2 className="mb-2">Self-Collected HPV Testing in PAVE </h2>
            <div>
              <ul>
                <li className="mb-1">
                  The PAVE study protocol begins with self-collected samples,
                  which requires far fewer pelvic examinations and clinician
                  time compared to Visual Inspection with Acetic Acid (VIA) or
                  other clinician-based techniques.
                </li>
                <li>
                  <a
                    href="https://onlinelibrary.wiley.com/doi/10.1002/ijc.34698"
                    target="_blank"
                  >
                    HPV testing in PAVE will be performed using a novel HPV test
                    called Screenfire, a PCR-based DNA amplification system that
                    provides typing in hierarchical risk groups: HPV 16, else
                    HPV18/45, else HPV 31/33/35/52/58, else HPV 39/51/56/59/68.
                    Read the Screenfire test manuscript{" "}
                    <BsBoxArrowUpRight className="ml-1" />.
                  </a>{" "}
                </li>
                <li>
                  HPV tests are run onsite or in local laboratories, with
                  results returned by the healthcare team to women quickly (same
                  day or within a few days), as determined individually at each
                  study site.
                </li>
              </ul>
            </div>

            <Row className="py-2">
              <Col xs={12}></Col>
              <Col xs={12}>
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <figure className="text-center">
                    <div className="image-container">
                      <Image
                        src={genderImg}
                        alt="In a hypothetical population of 100 individuals, with clinician-collected sampling, 100 women require pelvic exams to detect 15 women testing HPV+ and 3 with precancer. Using self-sampling, only the 15 HPV+ women require pelvic exams."
                        className="img-fluid mx-auto"
                      />
                      <p className="title-text">
                        In a hypothetical population of 100 individuals, with
                        clinician-collected sampling, 100 women require pelvic
                        exams to detect 15 women testing HPV+ and 3 with
                        precancer. Using self-sampling, only the 15 HPV+ women
                        require pelvic exams.
                      </p>
                    </div>

                    <figcaption className="mt-2">
                      <b>
                        Number of women undergoing pelvic exams to detect
                        precancer in a clinician-collected sampling compared to
                        self-sampling scenario
                      </b>
                    </figcaption>
                  </figure>
                </div>
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <h2>Automated Visual Evaluation (AVE) in PAVE </h2>
            <Row className="py-2">
              <Col xs={12}>
                Although VIA is commonly used in resource-limited settings, its
                utility is limited by low sensitivity and lack of
                reproducibility. AVE, a machine-learning approach utilizing
                artificial intelligence and visual information from digital
                cervical images, has the potential to estimate risk more
                reproducibly, accurately, and reliably than humans using VIA.
                This makes AVE suitable for resource-limited settings. Because
                AVE accuracy is affected by the characteristics of the camera
                used for image capture, AVE is implemented on a dedicated
                portable device. AVE programs using deep-learning strategies
                hold promise for further refining risk estimates beyond what is
                possible with HPV genotyping results alone.{" "}
              </Col>
            </Row>
            <Row className="py-2">
              <Col xs={12}>
                AVE research within the PAVE study aims to develop several
                reliable, accurate, and portable algorithms to aid clinicians in
                identifying the cervix and squamocolumnar junction and detecting
                and treating precancerous lesions.{" "}
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8732320/"
                  target="_blank"
                >
                  Read the AVE manuscript <BsBoxArrowUpRight className="ml-1" />
                  .
                </a>{" "}
              </Col>
            </Row>
            <Row className="py-2">
              <Col xs={12}>Lessons learned so far include: </Col>
              <Col>
                <ul className="mb-1">
                  <li>Rigorous outcome definitions are needed. </li>
                  <li>
                    Clinically important errors (e.g., calling precancer normal
                    and vice versa) must be minimized.
                  </li>
                  <li>
                    Indeterminate outcomes must be included to reduce the rate
                    of clinically important errors.
                  </li>
                  <li>
                    Algorithms using epidemiologic criteria must be evaluated to
                    ensure that they function as intended to detect disease.
                  </li>
                  <li>
                    Algorithms can be linked to risk estimation to support
                    clinical guidelines development after validation.
                  </li>
                </ul>
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8732320/"
                  target="_blank"
                >
                  Developing reliable AVE algorithms that function well in
                  varied settings has proven extremely challenging{" "}
                  <BsBoxArrowUpRight className="ml-1" />.
                </a>{" "}
              </Col>
              <Col xs={12}>
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <figure className="text-center">
                    <div className="image-container">
                      <Image
                        src={AveAlgorithm}
                        alt="The top of this figure depicts photographs of the cervix ranging from normal to precancer. The bottom depicts the results of the AVE algorithms, classified as normal, indeterminate, and precancer+. "
                        title=""
                        className="img-fluid mx-auto"
                      />
                      <p className="title-text">
                        The top of this figure depicts photographs of the cervix
                        ranging from normal to precancer. The bottom depicts the
                        results of the AVE algorithms, classified as normal,
                        indeterminate, and precancer+.
                      </p>
                    </div>

                    <figcaption className="mt-2">
                      <b>
                        Illustration of AVE algorithm distinguishing normal from
                        precancer.
                      </b>
                    </figcaption>
                  </figure>
                </div>
              </Col>
            </Row>
          </div>
          <div className="my-3">
            <h2>Risk-Stratification Using the PAVE Protocol </h2>
            <Row className="py-2">
              <Col xs={12}>
                Combining the four hierarchical HPV type risk groups and the
                three hierarchical AVE classifications yields a 12-point ordinal
                &quot;severity score&quot; that can be used to guide management.
              </Col>
            </Row>
            <Row className="py-2">
              <Col xs={12}>
                For example, a screening participant with HPV 16 and a
                &quot;precancer+&quot; AVE classification has the highest risk
                of precancer and is therefore most likely to benefit from
                treatment. In contrast, a screening participant with the lowest
                risk HPV genotypes (HPV39/51/56/59/68) and a &quot;normal&quot;
                AVE classification has a lower risk and is less likely to
                benefit from treatment. HPV negative women are at extremely low
                cancer risk and do not require further testing or treatment.{" "}
              </Col>
            </Row>

            <Row className="py-2 justify-content-center">
              <Col sm="auto">
                <Table
                  size="sm"
                  bordered
                  responsive="sm"
                  className="d-none d-sm-block"
                >
                  <thead>
                    <tr>
                      <th className="visually-hidden border-0">&nbsp;</th>
                      <th colSpan="3" className="text-center">
                        AVE Classification
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>HPV risk group</th>
                      <th className="text-center">Precancer+</th>
                      <th className="text-center">Indeterminate</th>
                      <th className="text-center">Normal</th>
                    </tr>
                    <tr>
                      <td>HPV16</td>
                      <td className="highest-bg text-center">Highest</td>
                      <td className="high-bg text-center">High</td>
                      <td className="high-bg text-center">High</td>
                    </tr>
                    <tr>
                      <td>HPV18/45</td>
                      <td className="high-bg text-center">High</td>
                      <td className="high-bg text-center">High</td>
                      <td className="high-bg text-center">High</td>
                    </tr>
                    <tr>
                      <td>HPV31/33/35/52/58</td>
                      <td className="high-bg text-center">High</td>
                      <td className="medium-bg text-center">Medium</td>
                      <td className="medium-bg text-center">Medium</td>
                    </tr>
                    <tr>
                      <td>HPV39/51/56/59/68</td>
                      <td className="high-bg text-center">High</td>
                      <td className="medium-bg text-center">Medium</td>
                      <td className="low-bg text-center">Low</td>
                    </tr>
                    <tr>
                      <td>Negative</td>
                      <td colSpan="3" className="lowest-bg text-center">
                        Lowest
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Table size="sm" bordered className="d-block d-sm-none">
                  <thead>
                    <tr>
                      <th className="visually-hidden">&nbsp;</th>
                      <th colSpan="3" className="text-center">
                        AVE Classification
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>HPV risk group</th>
                      <th style={{ writingMode: "vertical-lr" }}>Precancer+</th>
                      <th style={{ writingMode: "vertical-lr" }}>
                        Indeterminate
                      </th>
                      <th style={{ writingMode: "vertical-lr" }}>Normal</th>
                    </tr>
                    <tr>
                      <td>HPV16</td>
                      <td className="highest-bg text-center">Highest</td>
                      <td className="high-bg text-center">High</td>
                      <td className="high-bg text-center">High</td>
                    </tr>
                    <tr>
                      <td>HPV18/45</td>
                      <td className="high-bg text-center">High</td>
                      <td className="high-bg text-center">High</td>
                      <td className="high-bg text-center">High</td>
                    </tr>
                    <tr>
                      <td>HPV31/33/35/52/58</td>
                      <td className="high-bg text-center">High</td>
                      <td className="medium-bg text-center">Med</td>
                      <td className="medium-bg text-center">Med</td>
                    </tr>
                    <tr>
                      <td>HPV39/51/56/59/68</td>
                      <td className="high-bg text-center">High</td>
                      <td className="medium-bg text-center">Med</td>
                      <td className="low-bg text-center">Low</td>
                    </tr>
                    <tr>
                      <td>Negative</td>
                      <td colSpan="3" className="lowest-bg text-center">
                        Lowest
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </div>
      </article>
    </Container>
  );
}
