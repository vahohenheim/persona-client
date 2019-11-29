import React from "react"
import { Link } from 'react-scroll'
import { Row, Col, Button } from 'antd'

import Heading from "../../components/Heading"
import Container from "../../components/Container"

import scroll from "../../assets/icons/scroll.svg"

import styles from './About.module.css'

const About = () => {

    return (
        <Container name="about" className={styles.container}>
            <Row>
                <Col md={24}>
                    <span className="h1-subtitle">Creative front-end developer</span>
                    <Heading tag="h1">a multidisciplinary web artisan with a focus on design & react dev</Heading>
                </Col>
                <Col md={22}>
                    <p>I am a junior developer, based on Nantes. I’m locking for my first full-time job and i’m available for international opportunity. I’m always be passionate by the web environment and its value as a universal tool. As a web crafter, i develop my expertises on different domains in last 6 years : UI/UX design, front-end development, back-end development and project management.</p>
                    <Link to="contact" spy={true} smooth={true} duration={1000}>
                        <Button className={styles.button} ghost>contact me</Button>
                    </Link>
                    <Button className={styles.button} type="link" ghost>show my resume</Button>
                </Col>
            </Row>
            <div className={styles.containerScroll}>
                    <img src={scroll} alt="icon for invite to scroll"/>
                    <p>scroll for discover</p>
                </div>
        </Container>
    )

} 

export default About
