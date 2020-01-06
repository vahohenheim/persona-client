import React from 'react'
import { Row, Col } from 'antd'
import { Heading, Container, BackButton } from 'components'
import Fade from 'react-reveal/Fade'

import skin from "assets/images/sowesign/skin.png"
import example from "assets/images/sowesign/example.png"

import styles from './DetailsWorks.module.css'

import screenshot1 from "assets/images/sowesign/screenshot1.jpg"
import screenshot3 from "assets/images/sowesign/screenshot3.jpg"
import screenshot4 from "assets/images/sowesign/screenshot4.jpg"
import screenshot5 from "assets/images/sowesign/screenshot5.jpg"
import screenshot6 from "assets/images/sowesign/screenshot6.jpg"
import screenshot7 from "assets/images/sowesign/screenshot7.jpg"
import screenshot8 from "assets/images/sowesign/screenshot8.jpg"
import screenshot9 from "assets/images/sowesign/screenshot9.jpg"
import screenshot10 from "assets/images/sowesign/screenshot10.jpg"
import screenshot11 from "assets/images/sowesign/screenshot11.jpg"
import screenshot12 from "assets/images/sowesign/screenshot12.jpg"
import screenshot13 from "assets/images/sowesign/screenshot13.jpg"
import screenshot14 from "assets/images/sowesign/screenshot14.jpg"
import screenshot15 from "assets/images/sowesign/screenshot15.jpg"
import screenshot16 from "assets/images/sowesign/screenshot16.jpg"
import screenshot17 from "assets/images/sowesign/screenshot17.jpg"
import screenshot18 from "assets/images/sowesign/screenshot18.jpg"
import screenshot19 from "assets/images/sowesign/screenshot19.jpg"

const Sowesign = () => {

    return (   
        <Container className={styles.container}>
            <Fade delay={2000}>
                <Row>
                    <Col span={24}>
                        <BackButton to="/#works"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={2000}>
                <Row>
                    <Col span={24}>
                        <div className={`${styles.banner} ${styles.sowesign}`}>
                            <img className={styles.skin} src={skin} alt="Pattern pour SoWeSign"/>
                            <img className={styles.mainScreenshot} src={example} alt="Exemple pour SoWeSign"/>
                            <div className={styles.title}>
                                <Heading tag="h1">SoWeSign</Heading>
                                <p className={styles.subtitle}>UX DESIGN, UI DESIGN, web app</p>
                                <p className={styles.shortDescription}>Une appli de dématerialisation de signature</p>
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
                    <Col span={24} sm={9}>
                        <p>Ce projet a été initié dans le contexte d’un projet d’école réalisé en groupe. Nous avons pu travailler pour la société Scanpoint Software afin de réaliser une application de dématérialisation de signatures. Ils se positionnement en tant que tiers de confiance pour garantir la signature de document pdf en bonne et due forme par plusieurs signataires.</p>
                    </Col>
                    <Col span={12} sm={9}>
                        <img className={styles.screenshot} src={screenshot19} alt="Screenshot n°19"/>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h2">Création d’une session de signature</Heading>
                    </Col>
                </Row>
             </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot6} alt="Screenshot n°6"/>
                        <img className={styles.screenshot} src={screenshot7} alt="Screenshot n°7"/>
                        <img className={styles.screenshot} src={screenshot8} alt="Screenshot n°8"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1200}>
                        <img className={styles.screenshot} src={screenshot9} alt="Screenshot n°9"/>
                        <img className={styles.screenshot} src={screenshot10} alt="Screenshot n°10"/>
                        <img className={styles.screenshot} src={screenshot11} alt="Screenshot n°11"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1400}>
                        <img className={styles.screenshot} src={screenshot12} alt="Screenshot n°9"/>
                        <img className={styles.screenshot} src={screenshot13} alt="Screenshot n°10"/>
                        <img className={styles.screenshot} src={screenshot14} alt="Screenshot n°11"/>
                    </Fade>
                </Col>
            </Row>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h2">Administration d’une session</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot1} alt="Screenshot n°15"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1200}>
                        <img className={styles.screenshot} src={screenshot3} alt="Screenshot n°3"/>
                        <img className={styles.screenshot} src={screenshot4} alt="Screenshot n°4"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1400}>
                        <img className={styles.screenshot} src={screenshot5} alt="Screenshot n°5"/>
                    </Fade>
                </Col>
            </Row>
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h2">Espace signataire</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot15} alt="Screenshot n°15"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1200}>
                        <img className={styles.screenshot} src={screenshot16} alt="Screenshot n°16"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1400}>
                        <img className={styles.screenshot} src={screenshot17} alt="Screenshot n°17"/>
                    </Fade>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1400}>
                        <img className={styles.screenshot} src={screenshot18} alt="Screenshot n°18"/>
                    </Fade>
                </Col>
            </Row>
        </Container>
    )

} 

export default Sowesign
