import React from 'react'
import { Link } from 'react-scroll'
import { Row, Col, Button } from 'antd'
import { Heading, Container } from 'components'
import Fade from 'react-reveal/Fade'

import scroll from "assets/icons/scroll.svg"

import main from "assets/images/main.jpg"

import cv from "assets/pdf/curriculum-vitae_valentinbourreau_FR_website.pdf"

import styles from './About.module.css'

const About = () => {

    return (   
        <Container name="about" className={styles.container}>
            <Fade delay={2000}>
                <Row className={styles.wrapper}>
                    <div className={styles.title}>
                        <Heading tag="h1">Je suis un jeune artisan du web, centré sur le <span className={styles.highlight}>développement front-end</span></Heading>
                        <p>Je suis basé sur Nantes à la recherche de mon premier emploi après 6 années d’études, effectués en apprentissage.</p>
                        <Link to="contact" spy={true} smooth={true} duration={1000}>
                            <Button className={styles.button}>contactez-moi</Button>
                        </Link>
                        <Button href={cv} target="_blank" className={styles.button} type="link">voir mon curriculum vitae</Button>
                    </div>
                    <div>
                        <figure className={styles.figure}>
                            <img src={main} alt='Tableau "Haystacks" de Camille Pissarro' />
                            <figcaption>© Haystacks, Morning, Éragny, Camille Pissarro, 1899</figcaption>
                        </figure>
                    </div>
                </Row>
            </Fade>
            <Fade top delay={3000}>
                <div className={styles.containerScroll}>
                    <img src={scroll} alt="icon for invite to scroll"/>
                    <p>scroller pour découvrir</p>
                </div>
            </Fade>
        </Container>
    )

} 

export default About
