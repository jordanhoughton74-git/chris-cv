import Head from 'next/head';
import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Particles from "react-particles-js";
import ParticleConfig from "../components/particle-config";

function ContactMe (){
    return (
      <>
        <Head>
          <title>Chris Houghton | Contact Me</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>



        <Container className="contactMeDiv" fluid>
        <Particles className="particles" params={ParticleConfig} />

        <Row>
          <Col lg={6} md={6} sm={12}>
              <div className="contact-center">
                <h2>Contact Information</h2>
                    <p><strong>Email Address</strong> - cshoug@gmail.com christeacher89@gmail.com</p>
                    <p><strong>Address</strong>  - Daejeon, South Korea</p>
                    <p><strong>Skype ID</strong>  - cfcrules</p>
                    <p><strong>Kakao Talk</strong>  - cshoug</p>
                    <p><strong>Phone number</strong>  - 010-2552-2903</p>
                </div>
          </Col>
          <Col className="chrisImgCenter" lg={6} md={6} sm={12}>
         <img className="chrisImg" src="/images/Chris-Whole.png" />
               
          </Col>
        </Row>
      </Container>
      </>
    )
}

export default ContactMe;