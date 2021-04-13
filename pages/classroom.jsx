import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Particles from "react-particles-js";
import ParticleConfig from "../components/particle-config";
import styles from '../styles/Classroom.module.css'





export default function classroom() {
    return (
        <>
        <Head>
            <title>Chris Hougthon | Classroom</title>
        </Head>
        <div className={styles.backgroundImg} alt="classroom">
            <div className={styles.content}>
                <h1>
                Classroom Philosophy And <br/> Teaching Style
                </h1>
                <h3 className={styles.title}>“Tell me and I forget, teach me and I remember, involve me and I learn.”</h3>
                <p>
                - Benjamin Franklin -
                </p>
            </div>
        </div>

        <div className={styles.info}>
            <Container fluid>
                <Row>
                    <Col className={styles.infoDiv}lg={6} md={6} sm={12}>
                        <p>
                        Since becoming a teacher, I have spent much of my spare time, studying about how to teach, and 
                        trying to develop my skills, to be as beneficial to the students as possible.  What I have 
                        learnt, is that when students enjoy the class, I also enjoy the class.  This has made me 
                        actively try to make every class as engaging as possible.  I like to make sure that I use all 
                        their skill sets, in every class, as this really helps them to develop.
                        </p>

                    </Col>
                    <Col className={styles.videoMax} lg={6} md={6} sm={12}>
                        <div className="video">
                            <iframe width="auto" height="auto" src="https://www.youtube.com/embed/yzavW6k-WA8?controls=0" 
                            title="YouTube video player" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className={styles.classroomDetails}>
        <Particles className="particles" params={ParticleConfig} />



            <h2 id="SpeakingandListening" className={styles.classroom__title}>Speaking and Listening</h2>
            <p className={styles.classroom__content}>While learning a language, most people will study speaking the most, as they believe it to be the most practical skillsets.  However, we use our listening skills a lot more frequently, nearly 3 times as much.  As such, I like to teach them together.  I try to have the students repeat after me, as well as to listen to stories, and reply to questions, without seeing it.  One of my favourite things to do with a phonics class, is to say a word, and have them move around the room to the correct sound.  I also like to read to the students, and change words, or pronunciations, and have the students write, or say what I have changed, as a game.  This promotes accuracy in their listening, as well as being highly enjoyable for the students.</p>

            <h2 id="Writing" className={styles.classroom__title}>Writing</h2>
            <p className={styles.classroom__content}>Writing can be the most boring of subjects for students, so it takes some preparation and experience to know what will interest them.  I like to use projects, to encourage this interest in my students, as well as to allow them to see a finished product, of their hard work.  Relevance is highly important, and as such I believe a close relationship is key to ensuring my students get the most from their education.  My favourite project was a pirate story.  I gave the students photos of themselves, which they then edited, to make them look like pirates.  We then made a treasure map, and learnt about directions.  The students then wrote a story, using my questions as a guide.  This lasted about 4 weeks.  The students loved every minute of it, and each had a 10 page book to show for it.</p>

            <h2 id="Reading" className={styles.classroom__title}>Reading</h2>
            <p className={styles.classroom__content}>Reading is a super fun activity for the students, if it is taught correctly.  After reading, I like to have the students complete a writing assignment based on it.<br/> 
                I like to start by reading to the students.  I then have them repeat after me, if they are a lower level, or I have them read to me.  I then have them read again, stopping after every paragraph or sentence to ask them questions, to  see if they are understanding it.  I once read Fantastic Mr. Fox, with a class of 5th graders.  After each chapter, I set them a writing assignment for homework, in which they had to write their own story using the theme of the chapter, or write a summary of it.  The students loved every minute of it, especially as it was forcing themselves to push their abilities, and understanding of English.</p>


        </div>
        </>
    )
}