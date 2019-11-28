import React from "react"
import { Row, Col, Button } from 'antd'
import Heading from "../../components/Heading"
import CardExpertises from "../../components/CardExpertises"

import desktopIcon from '../../assets/icons/desktop.svg'
import mobileIcon from '../../assets/icons/mobile.svg'
import editorialIcon from '../../assets/icons/editorial.svg'

import styles from './Expertises.module.css'
import Container from "../../components/Container"

import background from "../../assets/images/design.png"

const Expertises = () => {

    return (
        <div className={styles.container}>
            <Container>
                <Row name="expertises" className={styles.containerCentred}>
                    <Col span={24}>
                        <Heading tag="h2">I am a multi-device front-end developer</Heading>
                        <p>I'm pass my 4 years to specialize my development skill in that part. Give live to experiences.</p>
                    </Col>
                    <Col sm={12} lg={8}>
                        <CardExpertises
                            imgSrc={desktopIcon}
                            imgAlt="icon desktop"
                            title="Web app"
                            content="React, redux, rxjs, gatsby, hugo, polymer, laravel, nodejs, webpack, angular, sass, jamstack, solutions cloud."
                        />
                    </Col>
                    <Col sm={12} lg={8}>
                        <CardExpertises
                            imgSrc={mobileIcon}
                            imgAlt="icon mobile"
                            title="Mobile app or PWA"
                            content="React Native, ionic, expo."
                        />
                    </Col>
                    <Col sm={12} lg={8}>
                        <CardExpertises
                            imgSrc={editorialIcon}
                            imgAlt="icon editorial"
                            title="Editorial website with JAMstack"
                            content="Gatsby, hugo, cloud deployment, prismic, ghost, CI/CD."
                        />
                    </Col>
                </Row>
            </Container>
            <div className={styles.containerBackground}>
                <Container>
                    <Row>
                        <Col span={20}>
                            <Heading tag="h2">By complementarity,<br/> i also like design with UI and UX</Heading>
                            <p>Interview, tests, zoning, wireframing, prototyping, experience maping, mobile first, atomic design, iconographie, print support.</p>
                            <Button className={styles.button} ghost>show my work on dribbble</Button>
                            <Button className={styles.button} ghost>show my work on behance</Button>
                        </Col>
                    </Row>
                </Container>
                <img className={styles.background} src={background} alt="wireframe from sketch" />
            </div>
            <div className={styles.containerCentred}>
                <Container>
                    <Row>
                        <Col span={24}>
                            <Heading tag="h2">And i love have a overview of web creation processing with project management</Heading>
                            <p>Agility, scrum, extrem programming, lean software development, conception, roadmap.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </div>
    )

} 

export default Expertises
