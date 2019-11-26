import React from "react"
import { Row, Col } from 'antd'

import Heading from "../../components/Heading"

import styles from './About.module.css'

const About = () => {

    return (
        <div name="about" className={styles.container}>
            <Row>
                <Col md={18}>
                    <span className="h1-subtitle">Développeur front-end créatif</span>
                    <Heading tag="h1">Je pense, design et crée des émotions pour le web</Heading>
                </Col>
                <Col md={22}>
                    <p>Je suis un jeune développeur front-end, à la recherche de mon premier emploi. J’ai toujours était passionné par le web et sa valeur en tant qu’outil universel. En tant qu’artisan du web, j’ai étoffé mon savoir-faire en décortiquant cet outil sous tous ses coutures durant les 6 dernières années : UI/UX Design, Développement Front-end, Développement Back-end et la gestion de projet infomatique.</p>
                </Col>
            </Row>
        </div>
    )

} 

export default About
