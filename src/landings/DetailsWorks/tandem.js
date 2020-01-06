import React from 'react'
import { Row, Col } from 'antd'
import { Heading, Container, BackButton } from 'components'
import Fade from 'react-reveal/Fade'

import skin from "assets/images/tandem/skin.png"
import example from "assets/images/tandem/example.png"

import screenshot1 from "assets/images/tandem/screenshot1.jpg"
import screenshot2 from "assets/images/tandem/screenshot2.jpg"
import screenshot3 from "assets/images/tandem/screenshot3.jpg"
import screenshot4 from "assets/images/tandem/screenshot4.jpg"
import screenshot5 from "assets/images/tandem/screenshot5.jpg"
import screenshot6 from "assets/images/tandem/screenshot6.jpg"


import styles from './DetailsWorks.module.css'

const Tandem = () => {

    return (   
        <Container className={styles.container}>
            <Fade delay={2000}>
                <Row className={styles.details}>
                    <Col span={24}>
                        <BackButton to="/#works"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={2000}>
                <Row>
                    <Col span={24}>
                        <div className={`${styles.banner} ${styles.tandem}`}>
                            <img className={styles.skin} src={skin} alt="Pattern pour Tandem"/>
                            <img className={styles.example} src={example} alt="Example du site Tandem"/>
                            <div className={styles.title}>
                                <Heading tag="h1">Tandem</Heading>
                                <p className={styles.subtitle}>UX Design, UI Design, Développement Wordpress</p>
                                <p className={styles.shortDescription}>Un site éditorial pour une association</p>
                            </div>
                            <div className={styles.scrollDirection}>
                                <p>Voir en détails</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={2000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <p>Création d’un site web pour l’association Tandem, assistance psychologique pour les personnes de 3 ans à 25 ans.</p>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1500}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot1} alt="Screenshot n°1"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1500}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot2} alt="Screenshot n°2"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1500}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot3} alt="Screenshot n°3"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1500}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot4} alt="Screenshot n°4"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1500}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot5} alt="Screenshot n°5"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1500}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot6} alt="Screenshot n°6"/>
                    </Col>
                </Row>
            </Fade>
        </Container>
    )

} 

export default Tandem
