"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table } from "react-bootstrap";

export default function About() {
  return (
    <Container className="py-3">
      <article className="shadow p-4 rounded">
        <h1 className="text-primary mb-3">Testing in PAVE </h1>
        <span>
          PAVE utilizes HPV and automated visual evaluation to estimate risk of
          cervical cancer
        </span>

        <div className="my-3">
          <h2>Self-Collected HPV Testing in PAVE </h2>

          <Row className="py-2">
            <Col xs={12}>
              The PAVE study protocol begins with self-collected samples, which
              requires far fewer pelvic examinations and clinician time compared
              to Visual Inspection with Acetic Acid (VIA) or other
              clinician-based techniques.{" "}
            </Col>
          </Row>
          <Row className="py-2">
            <Col xs={12}>
              <a
                href="https://onlinelibrary.wiley.com/doi/10.1002/ijc.34698"
                target="_blank"
              >
                HPV testing in PAVE will be performed using a novel HPV test
                called Screenfire, a PCR-based DNA amplification system that
                provides typing in hierarchical risk groups (HPV 16, else
                HPV18/45, else HPV31/33/35/52/58, else HPV39/51/56/59/68).{" "}
              </a>{" "}
              HPV tests are run onsite or in local laboratories, with results
              returned by the healthcare team to women quickly (same day or
              within a few days), as determined individually at each study site.
            </Col>
            <Col xs={12}>
              <div className="d-flex justify-content-center mt-3 mb-3">
                <figure className="text-center">
                  <img
                    src="/images/gender.png"
                    alt="In a hypothetical population of 100 individuals, with clinician-collected sampling, 100 women require pelvic exams to detect 15 women testing HPV+ and 3 with precancer. Using self-sampling, only the 15 HPV+ women require pelvic exams."
                    className="img-fluid mx-auto"
                  />
                  <figcaption className="mt-2">
                    Number of women undergoing pelvic exams to detect precancer
                    in a clinician-collected sampling compared to self-sampling
                    scenario
                  </figcaption>
                </figure>
              </div>
            </Col>
          </Row>
        </div>
        <div className="my-3">
          <h2>Automated Visual Evaluation (AVE) in PAVE </h2>
          <Row className="py-2">
            <Col xs={12}>
              Although VIA is commonly used in resource-limited settings, its
              utility is limited by low sensitivity and lack of reproducibility.
              AVE, a machine-learning approach utilizing artificial intelligence
              and visual information from digital cervical images, has the
              potential to estimate risk more reproducibly, accurately, and
              reliably than humans using VIA increasing its suitability for
              resource-limited settings. Because AVE accuracy is affected by the
              characteristics of the camera used for image capture, AVE is
              implemented on a dedicated portable device. AVE programs using
              deep-learning strategies hold promise for further refining risk
              estimates beyond what is possible with HPV genotyping results
              alone.{" "}
            </Col>
          </Row>
          <Row className="py-2">
            <Col xs={12}>
              The PAVE AVE study aims to develop several reliable, accurate, and
              portable algorithms to aid clinicians in identifying the cervix
              and squamocolumnar junction and detecting and treating
              precancerous lesions.{" "}
            </Col>
          </Row>
          <Row className="py-2">
            <Col xs={12}>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8732320/"
                target="_blank"
              >
                Developing reliable AVE algorithms that function well in varied
                settings has proven extremely challenging.
              </a>{" "}
              Lessons learned so far include:{" "}
            </Col>
            <Col>
              <ul>
                <li>rigorous outcome definitions are needed </li>
                <li>
                  clinically important errors (e.g., calling precancer normal
                  and vice versa) must be minimized{" "}
                </li>
                <li>
                  indeterminate outcomes must be included to reduce the rate of
                  clinically important errors by introducing a buffer zone.{" "}
                </li>
                <li>
                  algorithms using epidemiologic criteria must be evaluated to
                  ensure that they function as intended to detect disease.{" "}
                </li>
                <li>
                  algorithms can be linked to risk estimation to support
                  clinical guideline development after validation.{" "}
                </li>
              </ul>
            </Col>
            <Col xs={12}>
              <div className="d-flex justify-content-center mt-3 mb-3">
                <figure className="text-center">
                  <img
                    src="/images/AVE-algorithm.png"
                    alt="The top of this figure depicts photographs of the cervix ranging from normal to precancer. The bottom depicts the results of the AVE algorithms, classified as normal, indeterminate, and precancer+. "
                    className="img-fluid mx-auto"
                  />
                  <figcaption className="mt-2">
                    Illustration of AVE algorithm distinguishing normal from
                    precancer.
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
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S1877782123000498?via%3Dihub"
                target="_blank"
              >
                Triage with HPV genotyping and AVE results together can create a
                risk-stratification system that can guide clinical management.
              </a>
              Combining the four hierarchical HPV type risk groups and the three
              hierarchical AVE classifications yields a 12-point ordinal
              “severity score” that can be used to guide management. For
              example, a screening participant with HPV 16 and a “precancer+”
              AVE classification has the highest risk of precancer and is
              therefore most likely to benefit from treatment. In contrast, a
              screening participant with the lowest risk HPV genotypes
              (HPV39/51/56/59/68) and a “normal” AVE classification has a lower
              risk and is less likely to benefit from treatment. HPV negative
              women are at extremely low cancer risk and do not require further
              testing or treatment.{" "}
            </Col>
          </Row>
          <Row className="py-2">
            <Table bordered hover>
              <thead>
                <tr>
                  <th></th>
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
          </Row>
        </div>
      </article>
    </Container>
  );
}
