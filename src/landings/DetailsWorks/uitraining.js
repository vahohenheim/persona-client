import React from 'react'
import { Row, Col } from 'antd'
import { Heading, Container, BackButton } from 'components'
import Fade from 'react-reveal/Fade'

import pattern from "assets/images/uitraining/pattern.png"
import example from "assets/images/uitraining/example.png"

import screenshot1 from "assets/images/uitraining/screenshot1-min.jpg"
import screenshot2 from "assets/images/uitraining/screenshot2-min.jpg"
import screenshot3 from "assets/images/uitraining/screenshot3-min.jpg"
import screenshot4 from "assets/images/uitraining/screenshot4-min.jpg"
import screenshot5 from "assets/images/uitraining/screenshot5-min.jpg"
import screenshot6 from "assets/images/uitraining/screenshot6-min.jpg"
import screenshot7 from "assets/images/uitraining/screenshot7-min.jpg"
import screenshot8 from "assets/images/uitraining/screenshot8-min.jpg"
import screenshot9 from "assets/images/uitraining/screenshot9-min.jpg"
import screenshot10 from "assets/images/uitraining/screenshot10-min.jpg"
import screenshot11 from "assets/images/uitraining/screenshot11-min.jpg"
import screenshot12 from "assets/images/uitraining/screenshot12-min.jpg"
import screenshot13 from "assets/images/uitraining/screenshot13-min.jpg"
import screenshot14 from "assets/images/uitraining/screenshot14-min.jpg"

import styles from './DetailsWorks.module.css'

const UITraining = () => {

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
                        <div className={`${styles.banner} ${styles.uitraining}`}>
                            <img className={styles.pattern} src={pattern} alt="Pattern pour uitraining"/>
                            <img className={styles.mainScreenshot} src={example} alt="Exemple des travaux pour uitraining"/>
                            <div className={styles.title}>
                                <Heading tag="h1">UI Training</Heading>
                                <p className={styles.subtitle}>UX DESIGN, UI DESIGN</p>
                                <p className={styles.shortDescription}>Participation au challenge pour pratiquer le design</p>
                            </div>
                            <div className={styles.scrollDirection}>
                                <p>Voir en détails</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <p>Afin de me former à l’UI Design, j’ai pu m’exercer à des Daily UI. Ce challenge est un outil parfait pour apprendre du design et de s’entraîner par l’exercice, technique ayant fait ces preuves depuis la nuit des temps. Le but était de m’exercer à l’utilisation de Sketch. Cela m’a permis d’y découvrir les fonctionnalités et de les maîtriser pour gagner en temps de réalisation.</p>
                        <p>Je vous demanderai d’être indulgent pour la réalisation de ces maquettes, qui sont finalement mes premiers essais. Elles ont été réalisées entre décembre 2016 et juin 2017.</p>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot1} alt="Screenshot n°1"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot2} alt="Screenshot n°2"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot3} alt="Screenshot n°3"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot4} alt="Screenshot n°4"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot5} alt="Screenshot n°5"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot6} alt="Screenshot n°6"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot7} alt="Screenshot n°7"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot8} alt="Screenshot n°8"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot9} alt="Screenshot n°9"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot10} alt="Screenshot n°10"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot11} alt="Screenshot n°11"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot12} alt="Screenshot n°12"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot13} alt="Screenshot n°13"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <img className={styles.screenshot} src={screenshot14} alt="Screenshot n°14"/>
                    </Col>
                </Row>
            </Fade>
        </Container>
    )

} 

export default UITraining
