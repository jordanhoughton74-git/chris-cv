import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Link from "next/link";

import styles from '../styles/Home.module.css'
import Particles from "react-particles-js";
import ParticleConfig from "../components/particle-config";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Houghton | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.homeDiv}>
      <div className={styles.wrapper}>
        <img className={styles.homeImg} src="/images/Chris-Houghton.png" alt="image of Chris Houghton"/>
        <h1 className={styles.title}>
          Christopher Simon <br/>Houghton MA
        </h1>
        <h2 className={styles.subTitle}>
          ESL Teacher
        </h2>
      </div>
      </div>

      <div className={styles.aboutDiv}>
        <h2>
          About Me
        </h2>
        <p>
            Teaching is my passion, and the one thing that I love doing more than anything else.  
            I have taught English for 5 years in South Korea, and I have loved every minute of it.  
            My passion for teaching, is shown in every class that I teach.  This can easily be seen, 
            by how much my students love being in my class, and as such, they are highly motivated to 
            learn, and do very well.  I have always had success in the classroom, and I use many different 
            methods to teach, to make everything fun.
        </p>
        <p>
            Under my tutorage, one of my middle school students, went from failing, to achieving the highest 
            score in Gyeonggi-do, in her national test.  Another student of mine, went from being unable to read, 
            to testing at American Grade 2, after 6 months of my classes.
        </p>
        <p>
            In my spare time, I have lots of hobbies; most of which are sports related.  I also enjoy helping my friends, and 
            volunteering at a local orphanage, or other worthwhile causes.
        </p>
        <img className={styles.aboutImg} src="/images/chris-with-class.png" alt="Chris with some of his class"/>
      </div>

      <div className={styles.contactDiv}>
      <Particles className="particles" params={ParticleConfig} />
      <div>
        <Container className={styles.absolute}>
        <h2 className={styles.teaching}>Teaching Philosophy and Classes</h2>

          <Row className={styles.row}>
            <Col className={styles.col} md={4} sm={4} xs={12}>
              <Link href="/classroom#SpeakingandListening">
              <a>
             <span className={styles.dot}>
              <RecordVoiceOverIcon 
                style={{fill:"black"}}
                fontSize="large"
              />
              </span>
              <h3>Speaking and Listening</h3>
              </a>
              </Link>

            </Col>
            <Col className={styles.col} md={4} sm={4} xs={12}>
            <Link href="/classroom#Writing">
              <a>
              <span className={styles.dot}>
              <BorderColorIcon 
                style={{fill:"black"}}
                fontSize="large"
              />
              </span>
              <h3>Writing</h3>
              </a>
              </Link>
            </Col>
            <Col className={styles.colBot} md={4} sm={4} xs={12}>
            <Link href="/classroom#Reading">
              <a>
              <span className={styles.dot}>
              <MenuBookIcon
                style={{fill:"black"}}
                fontSize="large"
              />
              </span>
              <h3>Reading</h3>
              </a>
              </Link>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    </>
  )
}
