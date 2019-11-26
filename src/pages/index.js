import React from "react"
import { Row, Col } from 'antd'
import { StickyContainer } from 'react-sticky';

import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import Expertises from "../landing/Expertises"
import Works from "../landing/Works"
import Experiences from "../landing/Experiences"
import Educations from "../landing/Educations"
import Contact from "../landing/Contact"

import Container from '../components/Container'
import Heading from "../components/Heading"

import 'antd/dist/antd.css'
import '../styles/styles.css'

const Index = () => {

    return (
        <StickyContainer style={{
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }}>
                <Container style={{
                        height: '100%',
                    }}>
                    <Row style={{
                        height: '100%',
                    }}>
                        <Col span={6} style={{
                            borderLeft: '1px #F5F5F5 solid',
                            height: '100%',
                        }} />
                        <Col span={6} style={{
                            borderLeft: '1px #F5F5F5 solid',
                            height: '100%',
                        }} />
                        <Col span={6} style={{
                            borderLeft: '1px #F5F5F5 solid',
                            height: '100%',
                        }} />
                        <Col span={6} style={{
                            borderLeft: '1px #F5F5F5 solid',
                            borderRight: '1px #F5F5F5 solid',
                            height: '100%',
                        }} />
                    </Row>
                </Container>
            </div>
            <Header />
            <Container>
                <Row name="about" style={{ margin: '300px 0' }}>
                    <Col md={18}>
                        <span className="h1-subtitle">Développeur front-end créatif</span>
                        <Heading tag="h1">Je pense, design et crée des émotions pour le web</Heading>
                    </Col>
                    <Col md={22}>
                        <p>Je suis un jeune développeur front-end, à la recherche de mon premier emploi. J’ai toujours était passionné par le web et sa valeur en tant qu’outil universel. En tant qu’artisan du web, j’ai étoffé mon savoir-faire en décortiquant cet outil sous tous ses coutures durant les 6 dernières années : UI/UX Design, Développement Front-end, Développement Back-end et la gestion de projet infomatique.</p>
                    </Col>
                    
                </Row>
                <Expertises />
                <Works />
                <Experiences />
                <Educations />
                <Contact />
            </Container>
            <Footer/>
        </StickyContainer>
    )

} 

export default Index
