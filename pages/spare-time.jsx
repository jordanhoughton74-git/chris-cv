import Head from 'next/head';
import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Classroom.module.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function SpareTime (){
    return (
      <>
        <Head>
          <title>Chris Houghton | Spare Time</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.backgroundImg2} alt="classroom">
            <div className={styles.content}>
                <h1>My Spare Time</h1>
            </div>
        </div>

        <Container className={styles.topPad} fluid>
        <Row>
          <Col lg={6} md={12} sm={12}>
          <p className={styles.infoText}>In my spare time, I enjoy doing a wide variety of things. I like to spend time with my friends and my girlfriend, usually hiking, bike riding, or playing another sport.  I currently play Ultimate Frisbee, football (soccer), golf and pool, and used to play rugby, cricket and snooker.  I also love to read and study something new.

            One of my biggest personal achievements to date, is hiking the Annapurna curcuit in Nepal, where I hiked to a height of over 5400m.  This last summer, I rode the East Coast Trail in Korea.</p>
            
            <p>When I was younger, I volunteered at a retirement home.  This encouraged me to follow a career in which I can help young people, due to the wisdom they imparted upon me.While at university, I worked for 2 different political societies, as the treasurer and vice-chancellor for one, and the social secretary for the other.</p>

            <p>I also worked on a recycling initiative for the university campus.  There was previously no recycling in the dormitories.  We managed to develop a viable, cheap recycling program for use in the rooms.  The Students' Union listened to us, and implemented the program.  It took a long time, and a lot of effort, but was worth it in the long run.  This taught me to not give up, and see every set back as a new possibility to improve myself, and the things that I am passionate about.</p>
          </Col>
          <Col className={styles.center} lg={6} md={12} sm={12}>
          <Carousel className={styles.imageMax} infiniteLoop autoPlay>
                <div>
                  <img src="/images/spareTime/spare0.png" />
                </div>
                <div>
                  <img src="/images/spareTime/spare1.png" />
                </div>
                <div>
                  <img src="/images/spareTime/spare2.jpg" />
                </div>
                <div>
                  <img src="/images/spareTime/spare3.png" />
                </div>
                <div>
                  <img src="/images/spareTime/spare4.png" />
                </div>
                <div>
                  <img src="/images/spareTime/spare5.png" />
                </div>
                <div>
                  <img src="/images/spareTime/spare6.png" />
                </div>
               
            </Carousel>
            </Col>
        </Row>
      </Container>



    </>
    )
    }
export default SpareTime;