import Head from 'next/head';
import Link from "next/link"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Particles from "react-particles-js";
import ParticleConfig from "../components/particle-config";

import styles from '../styles/About.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Houghton | My Experiences</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.backgroundImg}>
          <div className={styles.content}>
            <h1>My Experiences</h1>
          </div>
      </div>

      <div className={styles.infoDiv}>
      <Particles className="particles" params={ParticleConfig} />

      
      <Container className={styles.container} fluid>
        <Row >
          <Col className={styles.work} lg={6} md={6} sm={12}>
              <h3>Work History</h3>
              <div className={styles.timeline}>
                  <div className={styles.padding}>
                  <Link href="/sahmyook-elementary-school"><span className={styles.dot}><ArrowForwardIcon fontSize="large" style={{fill: "black"}}/></span></Link>
              <h4>Sahmyook Elementary School, Daejeon</h4>
              <p className={styles.removePad}>February 2017 - Now</p>
              </div>
              </div>
              <div className={styles.timeline}>
                  <div className={styles.padding}>
                  <Link href="/world-language-school"><span className={styles.dot}><ArrowForwardIcon fontSize="large" style={{fill: "black"}}/></span></Link>
              <h4>World Language Academy, Daejeon</h4>
              <p className={styles.removePad}>September 2015 - February 2017</p>
              </div>
              </div>
              <div className={styles.timeline}>
                  <div className={styles.padding}>
                  <Link href="/howard's-school"><span className={styles.dot}><ArrowForwardIcon fontSize="large" style={{fill: "black"}}/></span></Link>
              <h4>Howard's School, Sejong City</h4>
              <p className={styles.removePad}>December 2013 - July 2015</p>
              </div>
              </div>
              <div className={styles.timeline}>
                  <div className={styles.padding}>
                  <Link href="/avalon-english-academy"><span className={styles.dot}><ArrowForwardIcon fontSize="large" style={{fill: "black"}}/></span></Link>
              <h4>Avalon English Academy, Ansan</h4>
              <p className={styles.removePad}>December 2012 - September 2013</p>
              </div>
              </div>
              <div className={styles.timeline}>
                  <div className={styles.padding}>
                  <Link href="/korea-herald-joshua"><span className={styles.dot}><ArrowForwardIcon fontSize="large" style={{fill: "black"}}/></span></Link>
              <h4>Korea Herald Joshua,  Yangju</h4>
              <p className={styles.removePad}>May 2011 - May 2012</p>
              </div>
              </div>    
        </Col>
          <Col className={styles.topPad} lg={6} md={6} sm={12}>
          <h3>Education</h3>
              <div className={styles.timeline}>
                  <div className={styles.padding}>
                  <span className={styles.dot}></span>
              <h4>University of Birmingham</h4>
              <p className={styles.removePad}>MA TESOL (Teaching English to Speakers of Other Languages)</p>
              <p className={styles.removePad}>2016-Ongoing</p>
              </div>
              </div>
              <div className={styles.timeline}>
                  <div className={styles.padding}>
                  <span className={styles.dot}></span>
                  <h4>University of Essex</h4>
                    <p className={styles.removePad}>Law LLB 2.2</p>
                    <p className={styles.removePad}>2007-2010</p>
              </div>
              </div>
              <div className={styles.timeline}>
                  <div className={styles.padding}>
                  <span className={styles.dot}></span>
                  <h4>TEFL 120 Hour</h4>
                    <p className={styles.removePad}>2016</p>
              </div>
              </div>
              <div className={styles.timeline}>
                  <div className={styles.padding}>
                  <span className={styles.dot}></span>
                  <h4>TEYL 60 Hours</h4>
                    <p className={styles.removePad}>2016</p>
                  </div>
              </div>
        
          </Col>
        </Row>
      </Container>
      </div>
     
    </>
  )
}
