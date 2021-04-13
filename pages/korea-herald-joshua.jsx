import Head from 'next/head';
import styles from '../styles/Experience.module.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export default function KoreaHerald() {
    return (
      <>
      <Head>
        <title>Chris Houghton | Korea Herald Joshua</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.backgroundImg3}>
          <div className={styles.content}>
            <h1>Korea Herald Joshua</h1>
            <h3>Yangju-Si</h3>
            <h5>May 2011 - May 2012</h5>
          </div>
      </div>
      <div className={styles.infoDiv}>
      
      <Container fluid>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <h5>Head Foreign Teacher</h5>
            <p className={styles.infoText}>While teaching at Korea Herald Joshua, I had the role of Head Foreign Teacher.  This gave me a lot of extra responsibilities, including scheduling, curriculum development and helping with the hiring and firing of personnel in the academy.

                At this school, I taught primarily Kindergarten, but I also taught elementary, middle and high school students.  The curriculum in the school, was geared around using current events and other social studies, to engage the students.   I also had to prepare test papers for my classes.  

                <br/>Teaching Kindergarten, helped me a lot as a teacher, as it forced me to make every class interesting, fun, engaging and interactive.  This is something I still try to make every class, no matter the age group.

                I had the freedom to use realia in the classroom, as well as to arrange for the students to go on field trips, such as to the zoo, swimming, or to ice cream shops.  The purpose of this, was to encourage them to speak English in their everyday life, not just in the classroom.  It was so successful, that some of the students would speak in English to each other, even when they were at dinner, or playing in the park, with their friends and family.</p>
          </Col>
          <Col lg={6} md={12} sm={12}>
          <Carousel infiniteLoop autoPlay>
                <div>
                    <img src="/images/Herald/Herald1.png" />
                </div>
                <div>
                    <img src="/images/Herald/Herald2.png" />
                </div>
                <div>
                    <img src="/images/Herald/Herald3.png" />
                </div>
                <div>
                    <img src="/images/Herald/Herald4.png" />
                </div>
            </Carousel>      
          </Col>
        </Row>
      </Container>
      </div>
      </>
    )
    }