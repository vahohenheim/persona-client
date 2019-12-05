import React from "react"
import { Link } from 'react-scroll'
import { Row, Col, Button } from 'antd'
import Fade from 'react-reveal/Fade'

import Heading from "../../components/Heading"
import Container from "../../components/Container"

import scroll from "../../assets/icons/scroll.svg"

import styles from './About.module.css'

const About = () => {

    return (   
        <Container name="about" className={styles.container}>
            <Fade delay={2000}>
                <Row>
                    <Col md={24}>
                        <Heading tag="h1">I'm a multidisciplinary web artisan focused on <span className={styles.bold}>design & react dev</span></Heading>
                    </Col>
                    <Col md={22}>
                        <p>I am a junior developer, based on Nantes. I’m locking for my first full-time job and i’m available for international opportunity.</p>
                        <Link to="contact" spy={true} smooth={true} duration={1000}>
                            <Button className={styles.button} ghost>contact me</Button>
                        </Link>
                        <Button className={styles.button} type="link" ghost>show my resume</Button>
                    </Col>
                </Row>
            </Fade>
            <Fade top delay={3000}>
                <div className={styles.containerScroll}>
                    <img src={scroll} alt="icon for invite to scroll"/>
                    <p>scroll for discover</p>
                </div>
            </Fade>
        </Container>
    )

} 

export default About
