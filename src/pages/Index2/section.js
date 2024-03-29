import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal
import ModalSection from "../../components/common/ModalSection";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    return (
      <React.Fragment>
        <section className="bg-home home-half" id="home">
          <div className="bg-overlay"></div>
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="justify-content-center">
                  <Col md={12}>
                    <div className="home-content text-white">
                      <div className="watch-video mt-5">
                        <Link
                          onClick={this.callModal}
                          to="#"
                          className="video-play-icon-trigger text-white"
                        >
                          <i className="mdi mdi-play play-icon-circle play play-icon f-30"></i>
                        </Link>
                      </div>
                      <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">
                        Siblng Technologies
                      </h5>
                      <h1 className="title mt-4 text-white text-uppercase">
                        We're Giving Design <br /> Solution & Idea.
                      </h1>
                      <div className="pt-4 mt-1">
                        <Link
                          to="#"
                          className="btn btn-outline-white mt-2 mr-3"
                        >
                          Talk to us
                        </Link>
                        <Link to="#" className="btn btn-primary ml-1 mt-2">
                          About us
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              {/* Render ModalSection Component for Modal */}
              <ModalSection ref="child" channel="vimeo" videoId="99025203" />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
