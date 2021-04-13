import Head from 'next/head';
import styles from '../styles/Experience.module.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
    return (
      <>
         <Head>
        <title>Chris Houghton | Howard's School</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.backgroundImg}>
          <div className={styles.content}>
            <h1>Howard's School</h1>
            <h3>Sejong City</h3>
            <h5>December 2013 - July 2015</h5>
          </div>
      </div>
      <div className={styles.infoDiv}>
      
      <Container fluid>
        <Row>
          <Col lg={6} md={6} sm={12}>
          <p className={styles.infoText}>While working at Howard's School, I was able to really hone my teaching skills.  At this school, there were only native English teachers, and so the students learnt in an immersive environment.  This meant having to ensure the students enjoyed every minute of class, as well as teaching them, reading, listening, grammar and speaking. I took the approach of combining these subjects, and not teaching them individually for every class.  The students loved this, as every class, had a similar pattern, but they we always did different things every day.

            The curriculum at this school, was based around cornerstone, and Reading A-Z.  This meant that I spent much of my time developing supplementary material, to aid the students, basing every class around their individual needs and levels.  The students loved this approach, and the school's reputation was amazing as a result.</p>
          </Col>
          <Col className={styles.center} lg={6} md={6} sm={12}>
          <Carousel className={styles.imageMax} infiniteLoop autoPlay>
                <div>
                  <img src="/images/Howard/howard1.jpeg" />
                </div>
                <div>
                  <img src="/images/Howard/howard2.jpeg" />
                </div>
                <div>
                    <img src="/images/Howard/howard3.jpeg" />
                </div>
               
            </Carousel> 
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col lg={{order: "last"}} md={{order: "last"}} sm={12}>
          <p className={styles.infoText}>Every month, I would give each class a topic, and we would build a project based around this.  The idea of the project was to test the students knowledge, as well as to make sure they had fun, in an interactive environment.  I would have the students work together to brainstorm, and then we would work in teams, or individually to create our project.  </p>
          </Col>
          <Col className={styles.videoMax} lg={6} md={6} sm={12}>
            <div className="video">
            <iframe width="auto" height="auto" src="https://www.youtube.com/embed/ZXwLpLzcIoI" 
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>           
            </div>
            </Col>
        </Row>
      </Container>
      </div>
      <div className={styles.infoDivLong}>
        <p>
        Some example projects would be putting on a play, whereby the students created and adapted characters for themelves, and worked together to be creative in the finished project.  Another very successful project was creating a Solar System.  The students researched about the planets, and then had to make a presentation about them.  We then created a scale representation of it on the ceiling, and also a scale size poster on the wall, to aid in their understanding of the work.  One of my favourite story writing activities, saw the students create their own town, in which there was then a zombie apocalypse, and they had to work together, to create a survival guide, using their new vocabulary.
        </p>
      </div>
      </>
    )
    }