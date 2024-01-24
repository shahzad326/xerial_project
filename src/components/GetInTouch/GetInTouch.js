import React, { useState } from "react";
import { Container, Row, Col, Media, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import SectionTitle from "../common/section-title";
import map from "../../assets/images/features/map.png";
import emailjs from "emailjs-com";

const GetInTouch = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [comments, setComments] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleuserName = (e) => {
    setUserName(e.target.value);
  };

  const handleComment = (e) => {
    setComments(e.target.value);
  };

  const handleFormSubmit = async () => {
    try {
      // Use Email.js to send an email directly from the frontend
      const templateParams = {
        user_username: username,
        user_email: email, // Use the provided email
        user_number: number,
        user_comments: comments,
      };

      // Replace these with your actual Email.js service, template, and user IDs
      await emailjs.send(
        "service_pgp6djo",
        "template_jzcpb99",
        templateParams,
        "Q92zMlUNGnruPqjrV"
      );

      setUserName("");
      setEmail("");
      setNumber("");
      setComments("");

      // Proceed with confirmation
    } catch (error) {
      console.error("Error confirming and sending email:", error);
      // Handle errors as needed
    }
  };

  return (
    <React.Fragment>
      <section className="section" id="contact">
        <Container>
          <SectionTitle
            title="Get In Touch"
            subtitle="Contact"
            desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
          />
          <Row className="mt-5 pt-2">
            <Col lg={5}>
              <div className="contact-info">
                <div
                  style={{
                    backgroundImage: `url(${map})`,
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Media>
                    <i className="mdi mdi-map-marker text-primary h4"></i>
                    <Media body className=" ml-4">
                      <p className="text-muted">
                        2276 Lynn Ogden Lane Beaumont
                        <br />
                        Lodgeville Road TX 77701
                      </p>
                    </Media>
                  </Media>

                  <Media className="mt-4">
                    <i className="mdi mdi-phone text-primary h4"></i>
                    <Media body className="ml-4">
                      <p className="text-muted">
                        Phone: +71 612-234-4023
                        <br />
                        Fax: +954-627-9727
                      </p>
                    </Media>
                  </Media>

                  <Media className="media mt-4">
                    <i className="mdi mdi-calendar-clock text-primary h4"></i>
                    <Media body className="ml-4">
                      <p className="text-muted">
                        Monday-friday: 9.00-19.00
                        <br />
                        Saturday-Sunday: Holiday
                      </p>
                    </Media>
                  </Media>

                  <Media className="media mt-4">
                    <i className="mdi mdi-email text-primary h4"></i>
                    <Media body className="ml-4">
                      <p className="text-muted">Email: FredVWeaver@rhyta.com</p>
                    </Media>
                  </Media>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="custom-form">
                <div id="message"></div>
                <AvForm
                  name="contact-form"
                  id="contact-form"
                  onSubmit={handleFormSubmit}
                >
                  <Row>
                    <Col lg={12}>
                      <FormGroup className="mt-3">
                        <AvField
                          name="username"
                          id="username"
                          type="text"
                          className="form-control"
                          placeholder="Your name"
                          errorMessage="Enter Your Name"
                          validate={{ required: { value: true } }}
                          onChange={handleuserName}
                          value={username}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <FormGroup className="mt-3">
                        <AvField
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Your email"
                          errorMessage="Enter Your email"
                          validate={{
                            required: { value: true },
                            email: { value: true },
                          }}
                          onChange={handleEmailChange}
                          value={email}
                        />
                      </FormGroup>
                    </Col>

                    <Col lg={6}>
                      <FormGroup className="mt-3">
                        <AvField
                          name="number"
                          id="number"
                          type="number"
                          className="form-control"
                          placeholder="Phone number"
                          errorMessage="Enter Your Phone number"
                          validate={{
                            required: { value: true },
                          }}
                          onChange={handleNumber}
                          value={number}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      <FormGroup className="mt-3">
                        <textarea
                          name="comments"
                          id="comments"
                          rows="5"
                          className="form-control"
                          placeholder="Your message"
                          onChange={handleComment}
                          value={comments}
                        ></textarea>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      <div className="mt-3">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="submitBnt btn btn-primary"
                          value="Send Message"
                        />
                        <div id="simple-msg"></div>
                      </div>
                    </Col>
                  </Row>
                </AvForm>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default GetInTouch;
