import Head from 'next/head';
import styles from '../styles/Experience.module.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function WorldLang() {
    return (
      <>
      <Head>
        <title>Chris Houghton | World Language School</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.backgroundImg4}>
          <div className={styles.content}>
            <h1>World Language School</h1>
            <h3>Daejeon-Si</h3>
            <h5>September 2015 - February 2017</h5>
          </div>
      </div>
      <div className={styles.infoDiv}>
      
      <Container fluid>
        <Row>
          <Col className={styles.padLeft} lg={6} md={6} sm={12}>
          <p className={styles.infoTextTest}>I taught for this company, for eighteen months, having joined after my previous school closed down.

            For my last year with the company, I taught in 4 public schools, however I taught in a total of 6 different schools, in their respective afterschool programs.  I was the sole native teacher, and was responsible for teaching them speaking.  I had to adapt my teaching style, to work with co-teachers, something I found to be very fun and rewarding</p>
          </Col>
          <Col className={styles.verticalAlign} lg={6} md={6} sm={12}>
          <img className={styles.imageSize} src="images/World/world-lang-top.png" />
          </Col>
        </Row>
      </Container>
      </div>
      <div className={styles.infoDiv}>
      
      <Container fluid>
        <Row>
          <Col lg={{span: 6, order: "last"}} md={{order: "last"}} sm={12}>
          <p className={styles.padRight}> The class sizes at this school, were much larger than anything I had previously taught, and as such I used lots of role plays, PowerPoints, and team games to teach the students.  Role plays are a great interactive tool for the students, especially when they are allowed to be creative with their answers, and not given only a few choices.  I always enjoyed seeing the different ideas that they have, and my students enjoyed that I gave them the freedom to express themselves, and respect them as individuals.  I like to use PowerPoints to help the students with their understanding, as it gives them something visual and interesting to always look at.</p>
          </Col>
          <Col className={styles.verticalAlignLeft} xl={6} lg={6} md={6} sm={12}>
          <img className={styles.imageSize}src="images/World/world-lang-middle.jpeg" />
          </Col>
        </Row>
      </Container>
      </div>

      <div className={styles.infoDiv}>
      
      <Container fluid>
        <Row>
          <Col className={styles.padLeft} lg={6} md={6} sm={12}>
          <p className={styles.infoTextTest}>Team games are great, and it allows the students to help and teach each other new vocabulary or topics.  This is something they find very rewarding and I love to see.  My favourite games to play, include, but are not limited to; Jeopardy, Charades, Word Race and Memory (a card game or word game).

While teaching here, I had to participate in a lot of open classes, whereby the parents come to watch my class.  The feedback was always very positive, and the parents loved the what I did, as much as the students did.  In the final survey, I received a 100% feedback from the parents at all my schools.  They especially liked my demeanour in class, and loved my relationship with the students, as well as the way the class was presented and flowed. </p>
          </Col>
          <Col className={styles.verticalAlign} lg={6} md={6} sm={12}>
          <img className={styles.imageSize}src="images/World/world-lang-bot.png" />
          </Col>
        </Row>
      </Container>
      </div>
      


      
      </>
    )
    }