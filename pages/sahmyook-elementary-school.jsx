import Head from 'next/head';
import styles from '../styles/Experience.module.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function Home() {
    return (
      <>
      <Head>
        <title>Chris Houghton | Sahmyook Elementary School</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.backgroundImg5}>
          <div className={styles.content}>
            <h1>Sahmyook Elementary School</h1>
            <h5>February 2017 - Now</h5>
          </div>
      </div>
      <div className={styles.infoDiv}>
      
      <Container fluid>
        <Row>
          <Col className={styles.infoTextSahmyook} lg={6} md={6} sm={12}>
          <p className={styles.infoText}>During my time with Sahmyook, I have been a first grade teacher, with only one class of students.  This has allowed me the opportunity to hone my teaching skills in a more intimate environment, as I only teach a 36 different students.  My class sizes range from 18 to 36 students, and I teach on my own.  This has allowed me to develop my classroom management skills, and to grow and improve as a teacher.</p>
          </Col>
          <Col className={styles.centerImg} lg={6} md={6} sm={12}>
            <img className={styles.imageSize} src="/images/Sahmyook/sahmyook-top.jpg" />

          </Col>
        </Row>
      </Container>
      </div>


      <div className={styles.infoDiv}>
      
      <Container fluid>
        <Row>
          <Col className={styles.infoTextSahmyook} lg={{span: 6, order: "last"}} md={{order: "last"}} sm={12}>
          <p className={styles.infoText}>  I have been teaching the students Language Arts, science and social studies, as well art.  This has allowed me to develop my skills in a wide range of areas, especially my planning and multimedia usage skills, as this the first school I have worked in that has a smartboard in the classroom.  Using these skills, I have been able to make my classes even more fun and interesting, to ensure the students are engaged in learning, giving them the best chance of language acquisition.</p>
          </Col>
          <Col className={styles.centerImg} lg={6} md={6} sm={12}>
            <img className={styles.imageSize} src="/images/Sahmyook/sahmyook-bot.png" />

          </Col>
        </Row>
      </Container>
      </div>
      </>
    )
    }