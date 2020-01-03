import React from 'react'
import { Link as LinkGatsby } from 'gatsby'
import { Row, Col } from 'antd'
import { Heading, Container } from 'components'
import Fade from 'react-reveal/Fade'

import skin from "assets/images/monument/skin.png"

import illustration1 from "assets/images/monument/illustration1.png"
import illustration2 from "assets/images/monument/illustration2.png"
import illustration3 from "assets/images/monument/illustration3.png"
import title1 from "assets/images/monument/title1.svg"
import title2 from "assets/images/monument/title2.svg"
import title3 from "assets/images/monument/title3.svg"

import styles from './DetailsWorks.module.css'

const Monument = () => {

    return (   
        <Container className={styles.container}>
            <Fade delay={2000}>
                <Row className={styles.details}>
                    <Col span={24}>
                        <LinkGatsby className={styles.back} to="/#works">
                            <svg width="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"/></svg>
                            Précédent
                        </LinkGatsby>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={2000}>
                <Row>
                    <Col span={24}>
                        <div className={`${styles.banner} ${styles.monument}`}>
                            <img className={styles.skin} src={skin} alt="Pattern pour Monument"/>
                            <div className={styles.title}>
                                <Heading tag="h1">Monument</Heading>
                                <p className={styles.subtitle}>UI DESIGN</p>
                                <p className={styles.shortDescription}>Une série d’illustration de monuments</p>
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
                <Row type="flex" justify="center">
                    <Col span={20} sm={16}>
                        <div className={styles.illustration}>
                            <img className={styles.visualIllustration} src={illustration1} alt=""/>
                            <img className={styles.titleIllustration} src={title1} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Fade>
            <Fade delay={2000}>
                <Row type="flex" justify="center">
                    <Col span={20} sm={16}>
                        <div className={styles.illustration}>
                            <img className={styles.visualIllustration} src={illustration2} alt=""/>
                            <img className={styles.titleIllustration} src={title2} alt=""/>
                        </div>
                        
                    </Col>
                </Row>
            </Fade>
            <Fade delay={2000}>
                <Row type="flex" justify="center">
                    <Col span={20} sm={16}>
                        <div className={styles.illustration}>
                            <img className={styles.visualIllustration} src={illustration3} alt=""/>
                            <img className={styles.titleIllustration} src={title3} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Fade>
        </Container>
    )

} 

export default Monument
