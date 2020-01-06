import React from 'react'
import { Row, Col } from 'antd'
import { Heading, Container, BackButton } from 'components'
import Fade from 'react-reveal/Fade'

import skin from "assets/images/edycem/skin.png"
import example from "assets/images/edycem/example.png"

import styles from './DetailsWorks.module.css'

import architecture from "assets/images/edycem/architecture.jpg"
import arborescence from "assets/images/edycem/arborescence.jpg"

import screenshot1 from "assets/images/edycem/screenshot1.jpg"
import screenshot2 from "assets/images/edycem/screenshot2.jpg"
import screenshot3 from "assets/images/edycem/screenshot3.jpg"
import screenshot4 from "assets/images/edycem/screenshot4.jpg"
import screenshot5 from "assets/images/edycem/screenshot5.jpg"
import screenshot6 from "assets/images/edycem/screenshot6.jpg"
import screenshot7 from "assets/images/edycem/screenshot7.jpg"
import screenshot8 from "assets/images/edycem/screenshot8.jpg"
import screenshot9 from "assets/images/edycem/screenshot9.jpg"
import screenshot10 from "assets/images/edycem/screenshot10.jpg"
import screenshot11 from "assets/images/edycem/screenshot11.jpg"
import screenshot12 from "assets/images/edycem/screenshot12.jpg"
import screenshot13 from "assets/images/edycem/screenshot13.jpg"
import screenshot14 from "assets/images/edycem/screenshot14.jpg"
import screenshot15 from "assets/images/edycem/screenshot15.jpg"
import screenshot16 from "assets/images/edycem/screenshot16.jpg"
import screenshot17 from "assets/images/edycem/screenshot17.jpg"
import screenshot18 from "assets/images/edycem/screenshot18.jpg"
import screenshot19 from "assets/images/edycem/screenshot19.jpg"
import screenshot20 from "assets/images/edycem/screenshot20.jpg"
import screenshot21 from "assets/images/edycem/screenshot21.jpg"
import screenshot22 from "assets/images/edycem/screenshot22.jpg"
import screenshot23 from "assets/images/edycem/screenshot23.jpg"
import screenshot24 from "assets/images/edycem/screenshot24.jpg"
import screenshot25 from "assets/images/edycem/screenshot25.jpg"
import screenshot26 from "assets/images/edycem/screenshot26.jpg"
import screenshot27 from "assets/images/edycem/screenshot27.jpg"
import screenshot28 from "assets/images/edycem/screenshot28.jpg"
import screenshot29 from "assets/images/edycem/screenshot29.jpg"
import screenshot30 from "assets/images/edycem/screenshot30.jpg"
import screenshot31 from "assets/images/edycem/screenshot31.jpg"
import screenshot32 from "assets/images/edycem/screenshot32.jpg"
import screenshot33 from "assets/images/edycem/screenshot33.jpg"
import screenshot34 from "assets/images/edycem/screenshot34.jpg"
import screenshot35 from "assets/images/edycem/screenshot35.jpg"
import screenshot36 from "assets/images/edycem/screenshot36.jpg"
import screenshot37 from "assets/images/edycem/screenshot37.jpg"
import screenshot38 from "assets/images/edycem/screenshot38.jpg"
import screenshot39 from "assets/images/edycem/screenshot39.jpg"
import screenshot40 from "assets/images/edycem/screenshot40.jpg"
import screenshot41 from "assets/images/edycem/screenshot41.jpg"
import screenshot42 from "assets/images/edycem/screenshot42.jpg"
import screenshot43 from "assets/images/edycem/screenshot43.jpg"
import screenshot44 from "assets/images/edycem/screenshot44.jpg"
import screenshot45 from "assets/images/edycem/screenshot45.jpg"
import screenshot46 from "assets/images/edycem/screenshot46.jpg"
import screenshot47 from "assets/images/edycem/screenshot47.jpg"
import screenshot48 from "assets/images/edycem/screenshot48.jpg"
import screenshot49 from "assets/images/edycem/screenshot49.jpg"
import screenshot50 from "assets/images/edycem/screenshot50.jpg"

const Edycem = () => {

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
                        <div className={`${styles.banner} ${styles.edycem}`}>
                            <img className={styles.skin} src={skin} alt="Pattern pour Edycem"/>
                            <img className={styles.mainScreenshot} src={example} alt="Exemple pour Edycem"/>
                            <div className={styles.title}>
                                <Heading tag="h1">Edycem</Heading>
                                <p className={styles.subtitle}>UI DESIGN, Hybrid app</p>
                                <p className={styles.shortDescription}>Une appli de gestion des heures éligibles aux crédits CIR</p>
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
                        <p>Ce projet a été initié dans le contexte d’un projet d’école réalisé en groupe. Nous avons pu travailler pour la société Edycem afin de réaliser une application de gestion des heures éligibles aux crédits CIR. Il se possitionnement en tant que tiers de confiance pour garantir la signature de document pdf en bonne et due forme par plusieurs signataires.</p>
                    </Col>
                </Row>
            </Fade>    
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h2">Architecture</Heading>
                        <img className={styles.screenshot} src={architecture} alt="architecture de edycem"/>
                    </Col>
                </Row>
            </Fade>    
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h2">Arborescence</Heading>
                        <img className={styles.screenshot} src={arborescence} alt="arborescence de edycem"/>
                    </Col>
                </Row>
            </Fade>    
            <Fade delay={1000}>
                <Row className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h2">Résultat</Heading>
                    </Col>
                </Row>
            </Fade>    
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h3">Authentification</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot1} alt="Screenshot n°1"/>
                        <img className={styles.screenshot} src={screenshot6} alt="Screenshot n°6"/>
                        <img className={styles.screenshot} src={screenshot2} alt="Screenshot n°2"/>
                        
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1200}>
                        <img className={styles.screenshot} src={screenshot7} alt="Screenshot n°7"/>
                        <img className={styles.screenshot} src={screenshot3} alt="Screenshot n°3"/>
                        <img className={styles.screenshot} src={screenshot4} alt="Screenshot n°4"/>
                        <img className={styles.screenshot} src={screenshot5} alt="Screenshot n°5"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1400}>
                        <img className={styles.screenshot} src={screenshot8} alt="Screenshot n°8"/>
                        <img className={styles.screenshot} src={screenshot9} alt="Screenshot n°9"/>
                        <img className={styles.screenshot} src={screenshot10} alt="Screenshot n°10"/>
                    </Fade>
                </Col>
            </Row>    
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h3">Navigation</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot11} alt="Screenshot n°11"/>
                    </Fade>
                </Col>
            </Row>    
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h3">Administration Utilisateur</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot12} alt="Screenshot n°12"/>
                        <img className={styles.screenshot} src={screenshot13} alt="Screenshot n°13"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot14} alt="Screenshot n°14"/>
                        <img className={styles.screenshot} src={screenshot15} alt="Screenshot n°15"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot17} alt="Screenshot n°17"/>
                        <img className={styles.screenshot} src={screenshot16} alt="Screenshot n°16"/>
                    </Fade>
                </Col>
            </Row>    
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h3">Administration RGPD</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot18} alt="Screenshot n°18"/>
                    </Fade>
                </Col>
            </Row>    
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h3">Créer un projet</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot19} alt="Screenshot n°19"/>
                        <img className={styles.screenshot} src={screenshot20} alt="Screenshot n°20"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot21} alt="Screenshot n°21"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot22} alt="Screenshot n°22"/>
                    </Fade>
                </Col>
            </Row>   
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h3">Saisie des heures</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot23} alt="Screenshot n°23"/>
                        <img className={styles.screenshot} src={screenshot29} alt="Screenshot n°29"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot24} alt="Screenshot n°24"/>
                        <img className={styles.screenshot} src={screenshot25} alt="Screenshot n°25"/>
                        <img className={styles.screenshot} src={screenshot28} alt="Screenshot n°28"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot26} alt="Screenshot n°26"/>
                        <img className={styles.screenshot} src={screenshot27} alt="Screenshot n°27"/>
                    </Fade>
                </Col>
            </Row>   
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h3">Administration Projets</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot30} alt="Screenshot n°30"/>
                        <img className={styles.screenshot} src={screenshot35} alt="Screenshot n°35"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot31} alt="Screenshot n°31"/>
                        <img className={styles.screenshot} src={screenshot32} alt="Screenshot n°32"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot33} alt="Screenshot n°33"/>
                        <img className={styles.screenshot} src={screenshot34} alt="Screenshot n°34"/>
                    </Fade>
                </Col>
            </Row>   
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h3">Administration Activités</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot36} alt="Screenshot n°36"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot37} alt="Screenshot n°37"/>
                        <img className={styles.screenshot} src={screenshot38} alt="Screenshot n°38"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot39} alt="Screenshot n°39"/>
                    </Fade>
                </Col>
            </Row>   
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h3">Administration Tâches</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot40} alt="Screenshot n°40"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot41} alt="Screenshot n°41"/>
                        <img className={styles.screenshot} src={screenshot42} alt="Screenshot n°42"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot43} alt="Screenshot n°43"/>
                    </Fade>
                </Col>
            </Row> 
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h3">Reprise du offline</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot44} alt="Screenshot n°44"/>
                        <img className={styles.screenshot} src={screenshot45} alt="Screenshot n°45"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot46} alt="Screenshot n°46"/>
                        <img className={styles.screenshot} src={screenshot48} alt="Screenshot n°48"/>
                        
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot47} alt="Screenshot n°47"/>
                    </Fade>
                </Col>
            </Row>  
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h3">Extraction</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot49} alt="Screenshot n°49"/>
                    </Fade>
                </Col>
            </Row>    
            <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h3">Messages</Heading>
                    </Col>
                </Row>
            </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot50} alt="Screenshot n°50"/>
                    </Fade>
                </Col>
            </Row>     
        </Container>
    )

} 

export default Edycem
