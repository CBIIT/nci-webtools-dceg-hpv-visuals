"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsBoxArrowUpRight } from "react-icons/bs"; // Importing icons

export default function About() {
  const handleLinkClick = (href) => {
    const confirmed = window.confirm(
      "The link will open a new tab. You can return to this page by clicking on the 'HPV' tab."
    );
    if (confirmed) {
      window.open(href, "_blank");
    }
  };
  return (
    <Container className="py-3">
      <article className="shadow p-4 rounded">
        <h1 className="text-primary mb-3">Publications</h1>

        <hr />
        <div>
          <h2 className="my-2">
            Scientific Basis and Methods of the Pave Protocol
          </h2>

          <div className="py-2">
            <ul>
              <li className="mb-1">
                <div className="mb-1">
                  Perkins RB et al.{" "}
                  {/* <a
                    href="https://pubmed.ncbi.nlm.nih.gov/37105017/"
                    target="_blank"
                  >
                    Use of risk-based cervical screening programs in
                    resource-limited settings{" "}
                    <BsBoxArrowUpRight className="ml-1" />.
                  </a>{" "} */}
                  <span
                    className="link-custom"
                    onClick={() =>
                      handleLinkClick(
                        "https://pubmed.ncbi.nlm.nih.gov/37105017/"
                      )
                    }
                  >
                    {" "}
                    Use of risk-based cervical screening programs in
                    resource-limited settings{" "}
                    <BsBoxArrowUpRight className="ml-1" />.
                  </span>
                  <span className="green">
                    <i>Cancer Epidemiol. 2023.</i>
                  </span>
                </div>
                <div>
                  Principles of risk-based management in the US and other
                  high-resource settings are applicable to resource-limited
                  settings. Specifically, risk-based screen-triage-treat
                  strategies minimize overtreatment of individuals with a very
                  low risk of developing cancer, while focusing diagnostic and
                  treatment resources on those with a high risk of developing
                  cancer.
                </div>
              </li>
              <li className="mb-1">
                De Sanjosé S et al.
                {/* <a
                  href="https://pubmed.ncbi.nlm.nih.gov/37693492/"
                  target="_blank"
                >
                  Design of the HPV-Automated Visual Evaluation (PAVE) Study:
                  Validating a Novel Cervical Screening Strategy{" "}
                  <BsBoxArrowUpRight className="ml-1" />.{" "}
                </a> */}
                <span
                  className="link-custom"
                  onClick={() =>
                    handleLinkClick("https://pubmed.ncbi.nlm.nih.gov/37693492/")
                  }
                >
                  Design of the HPV-Automated Visual Evaluation (PAVE) Study:
                  Validating a Novel Cervical Screening Strategy{" "}
                  <BsBoxArrowUpRight className="ml-1" />.{" "}
                </span>
                <span className="green">
                  <i>medRxiv. 2023.</i>
                </span>
                <div>
                  PAVE protocol of risk-based management using country-specific
                  protocols described for PAVE, wh.ich includes screening with
                  HPV self-collection using HPV genotyping and image and
                  cervical biopsy collection to train automated visual
                  evaluation (AVE) algorithms. During PAVE study, wWomen who
                  screen HPV-positive are managed with VIA, colposcopy, and/or
                  ablative or excisional treatment per in-country
                  standard-of-care with treatment resources allocated to those
                  most likely to develop cancer. The goal of the PAVE study is
                  to develop an accurate, low-cost, screen-triage protocol. The
                  PAVE strategy uses self-collected HPV testing on
                  self-collected samples for screening followed by triage of
                  HPV-positives using genotyping information from the screening
                  test and point-of-care{" "}
                  {/* <a
                    href="https://pubmed.ncbi.nlm.nih.gov/33072178/"
                    target="_blank"
                  >
                    automated visual evaluation{" "}
                    <BsBoxArrowUpRight className="ml-1" />
                  </a>{" "} */}
                  <span
                    className="link-custom"
                    onClick={() =>
                      handleLinkClick(
                        "https://pubmed.ncbi.nlm.nih.gov/33072178/"
                      )
                    }
                  >
                    automated visual evaluation{" "}
                    <BsBoxArrowUpRight className="ml-1" />
                  </span>
                  (AVE) information at the time of cervical examination. The
                  PAVE strategy allows risk-based management using
                  country-specific protocols{" "}
                </div>
              </li>
              <li className="mb-1">
                <div>
                  Desai KT, et al.{" "}
                  {/* <a
                    href="https://pubmed.ncbi.nlm.nih.gov/33072178/"
                    target="_blank"
                  >
                    Design and feasibility of a novel program of cervical
                    screening in Nigeria: self-sampled HPV testing paired with
                    visual triage <BsBoxArrowUpRight className="ml-1" />.{" "}
                  </a> */}
                  <span
                    className="link-custom"
                    onClick={() =>
                      handleLinkClick(
                        "https://pubmed.ncbi.nlm.nih.gov/33072178/"
                      )
                    }
                  >
                    Design and feasibility of a novel program of cervical
                    screening in Nigeria: self-sampled HPV testing paired with
                    visual triage <BsBoxArrowUpRight className="ml-1" />.{" "}
                  </span>
                  <span className="green">
                    <i>Infect Agent Cancer. 2020.</i>
                  </span>
                </div>
                <div>
                  Findings from a pilot proof-of-principle of self-sampled HPV
                  testing and visual triage. Nearly 10,000 women successfully
                  screened with HPV-positivity rates of 17.3% overall and 40.5%
                  in the women living with HIV. This pilot established the basis
                  for visual evaluation with biopsy confirmation that underpins
                  AVE.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="mb-3">
            Scientific Evidence for Screenfire, a Novel HPV Assay with
            Genotyping
          </h2>
          <div className="py-2">
            <ul>
              <li className="mb-1">
                <div className="mb-1">
                  Inturrisi F, et al.{" "}
                  {/* <a
                    href="https://pubmed.ncbi.nlm.nih.gov/37772799/"
                    target="_blank"
                  >
                    A rapid HPV typing assay to support global cervical cancer
                    screening and risk-based management: A cross-sectional study{" "}
                    <BsBoxArrowUpRight className="ml-1" />.{" "}
                  </a> */}
                  <span
                    className="link-custom"
                    onClick={() =>
                      handleLinkClick(
                        "https://pubmed.ncbi.nlm.nih.gov/37772799/"
                      )
                    }
                  >
                    {" "}
                    A rapid HPV typing assay to support global cervical cancer
                    screening and risk-based management: A cross-sectional study{" "}
                    <BsBoxArrowUpRight className="ml-1" />.{" "}
                  </span>
                  <span className="green">
                    <i>Int J Cancer. 2023.</i>
                  </span>
                </div>
                <div>
                  This paper describes the accuracy of the Screenfire test when
                  used in 2076 stored samples. Overall clinical sensitivity for
                  CIN3+ was 94.7% similar to other PCR-based assays: Linear
                  Array (92.3) and TypeSeq (96.0). Sensitivity was high for all
                  types and channels.
                </div>
              </li>
              <li className="mb-1">
                <div className="mb-1">
                  Desai KT, et al.{" "}
                  {/* <a
                    href="https://pubmed.ncbi.nlm.nih.gov/35666530/"
                    target="_blank"
                  >
                    Redesign of a rapid, low-cost HPV typing assay to support
                    risk-based cervical screening and management{" "}
                    <BsBoxArrowUpRight className="ml-1" />.{" "}
                  </a> */}
                  <span
                    className="link-custom"
                    onClick={() =>
                      handleLinkClick(
                        "https://pubmed.ncbi.nlm.nih.gov/35666530/"
                      )
                    }
                  >
                    Redesign of a rapid, low-cost HPV typing assay to support
                    risk-based cervical screening and management{" "}
                    <BsBoxArrowUpRight className="ml-1" />.{" "}
                  </span>
                  <span className="green">
                    <i>Int J Cancer. 2022.</i>
                  </span>
                </div>
                <div>
                  Redesign of a 15-type HPV genotyping test to a 13-type test
                  with HPV genotype hierarchically by cancer risk (Screenfire).
                  Hierarchical results mean that the test is configured to
                  preferentially detect the highest risk types followed by lower
                  risk types. The redesigned test showed excellent accuracy
                  compared to PCR-based standards and establishes Screenfire as
                  the screening test for the PAVE study.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="mb-3">
            Development of Automated Visual Evaluation (AVE): Problems and
            Solutions
          </h2>

          <Row className="pb-2">
            <Col xs={12}>
              <div>
                <b>
                  The following papers are key for This section contains
                  critical papers for any group intending to use AI for analysis
                  of cervical images. These papers is study outlines critical
                  steps for ensuring that AI algorithms will function when
                  deployed in the field. Many current algorithms contain
                  critical important errors of overfitting, lack of portability,
                  and unrealistic, near-perfect performance estimates, leading
                  them to fail when used in real-life settings. Key steps for
                  avoiding AI algorithm failures in the field are detailed.
                </b>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <h3 className="my-2">Lessons from the Field</h3>
          <div>
            <ul>
              <li className="mb-1">
                <div className="mb-1">
                  Egemen D, et al.{" "}
                  {/* <a
                    href="https://pubmed.ncbi.nlm.nih.gov/37758250/"
                    target="_blank"
                  >
                    AI-based image analysis in clinical testing: lessons from
                    cervical cancer screening{" "}
                    <BsBoxArrowUpRight className="ml-1" />.
                  </a>{" "} */}
                  <span
                    className="link-custom"
                    onClick={() =>
                      handleLinkClick(
                        "https://pubmed.ncbi.nlm.nih.gov/37758250/"
                      )
                    }
                  >
                    AI-based image analysis in clinical testing: lessons from
                    cervical cancer screening{" "}
                    <BsBoxArrowUpRight className="ml-1" />.{" "}
                  </span>
                  <span className="green">
                    <i>Int J Cancer. 2022.</i>
                  </span>
                </div>
                <div>
                  This paper describes the steps needed to design AVE algorithms
                  that will not fail when moved outside of their original test
                  setting. These include rigorous definition of test outcomes;
                  minimizing clinically important errors (e.g., labeling
                  precancer as normal; confirming test accuracy using clinical
                  epidemiologic criteria and ensuring both internal and external
                  validation; linking AI algorithm results to clinical risk
                  estimation and use absolute (not relative) risk; generating
                  risk-based guidelines in accordance with local resources and
                  priorities.
                </div>
              </li>
              <li className="mb-1">
                <div className="mb-1">
                  Parham GP, et al.{" "}
                  {/* <a
                    href="https://pubmed.ncbi.nlm.nih.gov/37845724/"
                    target="_blank"
                  >
                    AI-based image analysis in clinical testing: lessons from
                    cervical cancer screening{" "}
                    <BsBoxArrowUpRight className="ml-1" />.
                  </a>{" "} */}
                  <span
                    className="link-custom"
                    onClick={() =>
                      handleLinkClick(
                        "https://pubmed.ncbi.nlm.nih.gov/37845724/"
                      )
                    }
                  >
                    {" "}
                    AI-based image analysis in clinical testing: lessons from
                    cervical cancer screening{" "}
                    <BsBoxArrowUpRight className="ml-1" />.{" "}
                  </span>
                  <span className="green">
                    <i>Infect Agent Cancer. 2023.</i>
                  </span>
                </div>
                <div>
                  This paper describes successful application of the AVE
                  algorithm developed for the PAVE study in a new dataset.
                  Following training and internal validation studies, the
                  algorithm was retrained using 40 images each from three image
                  categories that correspond to HPV natural history: normal,
                  indeterminate, precancer/cancer. Precancer risk was then
                  estimated using the output of the retrained algorithm in
                  combination with HPV genotyping results using the four
                  hierarchical categories. This produces a 12-level risk scale,
                  from low risk and normal AVE classification to high risk
                  precancer/cancer classification. The predictive value of the
                  risk estimates was confirmed using histologic biopsy data. HPV
                  type, AVE classification, and the 12-level risk scale all were
                  strongly associated with biopsy diagnoses. Women living with
                  HIV had higher prevalence of precancer/cancer; the HPV-AVE
                  risk categories strongly predicted diagnostic findings in
                  these women as well.
                </div>
              </li>
              <li className="mb-1">
                <div className="mb-1">
                  Desai KT, et al.{" "}
                  {/* <a
                    href="https://pubmed.ncbi.nlm.nih.gov/34800038/"
                    target="_blank"
                  >
                    The development of &quot;automated visual evaluation&quot;
                    for cervical cancer screening: The promise and challenges in
                    adapting deep-learning for clinical testing:
                    Interdisciplinary principles of automated visual evaluation
                    in cervical screening <BsBoxArrowUpRight className="ml-1" />
                    .
                  </a>{" "} */}
                  <span
                    className="link-custom"
                    onClick={() =>
                      handleLinkClick(
                        "https://pubmed.ncbi.nlm.nih.gov/34800038/"
                      )
                    }
                  >
                    The development of &quot;automated visual evaluation&quot;
                    for cervical cancer screening: The promise and challenges in
                    adapting deep-learning for clinical testing:
                    Interdisciplinary principles of automated visual evaluation
                    in cervical screening <BsBoxArrowUpRight className="ml-1" />
                    .{" "}
                  </span>
                  <span className="green">
                    <i> Int J Cancer. 2022.</i>
                  </span>
                </div>
                <div>
                  Critical steps for ensuring that AI algorithms will function
                  when deployed outside of test settings. Key elements for
                  ensuring portability of an AI algorithm to a new dataset
                  include clarifying the target population; aligning AVE
                  categories with HPV natural history; training on
                  representative images from the four stages of cervical
                  carcinogenesis; carefully selecting the AI algorithm; and
                  performing internal validation to test accuracy and external
                  validation to avoid overfitting. External validation and field
                  testing ensures that AI functions well outside of the test
                  setting. Introducing deep learning-based methods prematurely
                  threatens their eventual acceptance and best use.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="my-2">Technical Papers</h3>
          <div>
            <ul>
              <li className="mb-1">
                <div className="mb-1">
                  Ahmed SR, et al.{" "}
                  {/* <a
                    href="https://pubmed.ncbi.nlm.nih.gov/36909463/"
                    target="_blank"
                  >
                    Reproducible and Clinically Translatable Deep Neural
                    Networks for Cancer Screening{" "}
                    <BsBoxArrowUpRight className="ml-1" />.
                  </a>{" "} */}
                  <span
                    className="link-custom"
                    onClick={() =>
                      handleLinkClick(
                        "https://pubmed.ncbi.nlm.nih.gov/36909463/"
                      )
                    }
                  >
                    Reproducible and Clinically Translatable Deep Neural
                    Networks for Cancer Screening{" "}
                    <BsBoxArrowUpRight className="ml-1" />.{" "}
                  </span>
                  <span className="green">
                    <i>Res Sq. 2023.</i>
                  </span>
                </div>
                <div>
                  This paper addresses the current issues in AI including
                  overfitting, lack of portability, and unrealistic,
                  near-perfect performance estimates by developing and
                  evaluating several models on their relative portability,
                  repeatability, and classification performance using a large,
                  collated, multi-institutional dataset of 9,462 women (17,013
                  images). The top performing model, when combined with HPV
                  type, achieved an area under the Receiver Operating
                  Characteristics (ROC) curve (AUC) of 0.89 within our study
                  population of interest, and a limited total extreme
                  misclassification rate of 3.4% on held-aside test sets.
                </div>
              </li>
              <li className="mb-1">
                <div className="mb-1">
                  Lemay A., et al.{" "}
                  {/* <a
                    href="https://pubmed.ncbi.nlm.nih.gov/36400939/"
                    target="_blank"
                  >
                    Improving the repeatability of deep learning models with
                    Monte Carlo dropout <BsBoxArrowUpRight className="ml-1" />.
                  </a>{" "} */}
                  <span
                    className="link-custom"
                    onClick={() =>
                      handleLinkClick(
                        "https://pubmed.ncbi.nlm.nih.gov/36400939/"
                      )
                    }
                  >
                    Improving the repeatability of deep learning models with
                    Monte Carlo dropout <BsBoxArrowUpRight className="ml-1" />.{" "}
                  </span>
                  <span className="green">
                    <i>NPJ Digit Med. 2022.</i>
                  </span>
                </div>
                <div>
                  This paper describes using Monte Carlo dropout predictions to
                  improve AI model repeatability. If model repeatability is not
                  assessed in AI development, models will be unusable in
                  clinical practice. Using 20 Monte Carlo iterations
                  significantly increases repeatability, in particular at the
                  class boundaries, for all tasks on the binary, multi-class,
                  and ordinal models leading to an average reduction of the 95%
                  limits of agreement by 16% points and of the class
                  disagreement rate by 7% points. Both classification accuracy
                  and repeatability are improved in most settings.
                </div>
              </li>
              <li className="mb-1">
                <div className="mb-1">
                  Xue Z, et al.{" "}
                  {/* <a
                    href="https://pubmed.ncbi.nlm.nih.gov/36315110/"
                    target="_blank"
                  >
                    Image Quality Classification for Automated Visual Evaluation
                    of Cervical Precancer <BsBoxArrowUpRight className="ml-1" />
                    .
                  </a>{" "} */}
                  <span
                    className="link-custom"
                    onClick={() =>
                      handleLinkClick(
                        "https://pubmed.ncbi.nlm.nih.gov/36315110/"
                      )
                    }
                  >
                    Image Quality Classification for Automated Visual Evaluation
                    of Cervical Precancer <BsBoxArrowUpRight className="ml-1" />
                    .{" "}
                  </span>
                  <span className="green">
                    <i>Med Image Learn Ltd Noisy Data. 2022.</i>
                  </span>
                </div>
                <div>
                  This study classified images into four quality categories
                  (&quot;unusable&quot;, &quot;unsatisfactory&quot;,
                  &quot;limited&quot;, and &quot;evaluable&quot;) and improved
                  the quality classification performance by automatically
                  identifying mislabeled and overly ambiguous images. Testing on
                  a dataset of 87,420 images obtained from 14,183 patients from
                  diverse studies and geographic regions worldwide. If images
                  are not of adequate quality, an AI algorithm may not function
                  or may provide inaccurate outputs.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </Container>
  );
}
