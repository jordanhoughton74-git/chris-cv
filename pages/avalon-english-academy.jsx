import Head from 'next/head';

import styles from '../styles/Experience.module.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


export default function AvalonEnglish() {
    return (
      <>
      <Head>
        <title>Chris Houghton | Avalon English Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.backgroundImg2}>
          <div className={styles.content}>
            <h1>Avalon English Academy</h1>
            <h3>Ansan-Si</h3>
            <h5>December 2012 - September 2013</h5>
          </div>
      </div>
      <div className={styles.infoDiv}>
      
      <Container fluid>
        <Row>
          <Col lg={6} md={12} sm={12}>
          <p className={styles.infoText}>I spent 9 months working for the Ansan campus of Avalon.  While in this position, I introduced a lot of new initiatives, with the help of my co-workers.  The main idea was to make the students more interested, entertained, and able to use English in a wider variety of ways.

            The first thing that I introduced, was a debate club, in which the students learned to use English practically, while arguing with each other. Throughout my time, this developed nicely, and the students were able to retort arguements, with very little thinking time.  It aided them a lot, especially in their speaking tests.

            <br/>Secondly, I was able to change the free-writing days, into project-based days, in which the students would spend a few weeks making one project.  For example, one project, was product design.  The students brain-stormed ideas, drafted them, surveyed people, and then made a final advert for the product. This helped them in all areas of their studies, as well as ensuring they were always super early for class, and waiting for me to start the lesson.

            <br/> The third main idea, was that of a student based website.  They were able to write news articles, make videos, or do just about anything they wanted with this space.  I used this time, to guide the students, and have them use what we had learnt in other lessons.  They were each assigned a position, and had responsibilities, as well as having to report to at least one of their peers.  They loved this, as they felt like they were controlling their studies, as well as being able to act like adults.

            <br/>I enjoyed my time teaching here immensely, however I had to leave for personal reasons.  While working here, I was able to get used to teaching much larger classes, sometimes upto 40 students for my free-writing, as well as having to plan my classes to the best possible standards.  I developed a lot as a teacher, and was able to start coaching students, as well as mentoring them, and ecouraging them to learn from each other, by noticing their mistakes.  I learnt to promote a balance between fluency and accuracy, to ensure they are confident, and enjoy using English naturally.</p>
          </Col>
          <Col className={styles.verticalAlign} lg={6} md={12} sm={12}>
            <div className="video">
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/7dTcsEwz4ys" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <h5 className={styles.videoText}>Debate Class</h5>
            <p>Kate, Winnie, Jenny andJanet, spent 4 classes researcing, preparing, and presenting this presentation, on endangered animals.</p>
          </Col>
        </Row>
      </Container>
      </div>
      
      </>
    )
    }