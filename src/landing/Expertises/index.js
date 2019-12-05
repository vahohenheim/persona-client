import React from "react"
import { Row, Col, Button } from 'antd'
import Fade from 'react-reveal/Fade'

import Heading from "../../components/Heading"
import CardExpertises from "../../components/CardExpertises"
import Container from "../../components/Container"

import desktopIcon from '../../assets/icons/desktop.svg'
import mobileIcon from '../../assets/icons/mobile.svg'
import editorialIcon from '../../assets/icons/editorial.svg'

import styles from './Expertises.module.css'

import background from "../../assets/images/design.png"

const Expertises = () => {

    return (
        <div name="expertises" className={styles.container}>
            <Container>
                <Row className={styles.containerCentred}>
                    <Fade delay={500}>
                        <Col span={24}>
                            <Heading tag="h2">I am a multi-device front-end developer</Heading>
                            <p>After few year to search about me and my aspiration, i decide to find a way to use my intrinsic skills, enter logical, organisation and visual worker. I discover the job of Front-end developer with website become web app with javascript framework.
                            I specialize my skills in last 3 years for this web domain. My work pretend to be scalable and robust, in this land of multiplicity.
                            My objective is to give live to experiences.</p>
                        </Col>
                    </Fade>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={18} sm={12} lg={8}>
                        <Fade delay={1000}>
                            <CardExpertises
                                imgSrc={desktopIcon}
                                imgAlt="icon desktop"
                                title="Web app"
                                content="React, redux, rxjs, gatsby, hugo, polymer, laravel, nodejs, webpack, angular, sass, jamstack, solutions cloud."
                            />
                        </Fade>
                    </Col>
                    <Col span={18} sm={12} lg={8}>
                        <Fade delay={1500}>
                            <CardExpertises
                                imgSrc={mobileIcon}
                                imgAlt="icon mobile"
                                title="Mobile app or PWA"
                                content="React Native, ionic, expo."
                            />
                        </Fade>
                    </Col>
                    <Col span={18} sm={12} lg={8}>
                        <Fade delay={2000}>
                            <CardExpertises
                                imgSrc={editorialIcon}
                                imgAlt="icon editorial"
                                title="Editorial website with JAMstack"
                                content="Gatsby, hugo, cloud deployment, prismic, ghost, CI/CD."
                            />
                        </Fade>
                    </Col>
                </Row>
            </Container>
            <div className={styles.containerBackground}>
                <Container>
                    <Row>
                        <Fade delay={1500}>
                            <Col span={20}>
                                <Heading tag="h2">By complementarity,<br/> i also like design with UI and UX</Heading>
                                <p>Interview, tests, zoning, wireframing, prototyping, experience maping, mobile first, atomic design, iconographie, print support.</p>
                                <Button className={styles.button} ghost>show my work on dribbble</Button>
                                <Button className={styles.button} ghost>show my work on behance</Button>
                            </Col>
                        </Fade>
                    </Row>
                </Container>
                <Fade right delay={2000}>
                    <img className={styles.background} src={background} alt="wireframe from sketch" />
                </Fade>
            </div>
            <div className={styles.containerCentred}>
                <Container>
                    <Row>
                        <Fade delay={1000}>
                            <Col span={24}>
                                <Heading tag="h2">And i love have a overview of web creation processing with project management</Heading>
                                <p>Agility, scrum, extrem programming, lean software development, conception, roadmap.</p>
                            </Col>
                        </Fade>
                    </Row>
                </Container>
            </div>
            
        </div>
    )

} 

export default Expertises
