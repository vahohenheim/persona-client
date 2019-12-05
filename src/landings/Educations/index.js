import React from 'react'
import { Row, Col } from 'antd'
import { Heading } from 'components'

const Educations = () => {

    return (
        <Row style={{ padding: '80px 0' }}>
            <Col span={24}>
                <Heading tag="h2">J’ai étudié</Heading>
                <div style={{ margin: '30px 0' }}>
                    <Heading style={{ marginTop: '10px', marginBottom: '0' }} tag="h3">Master chef de projet en système informatique</Heading>
                    <span className="h3-subtitle">Titre RNCP Niveau I - IMIE, Nantes (44)</span>
                    <p>
                        Agile management (Scrum, Extrem programming, Lean software development)
                        Gestion de la RGPD, des équipes de développement, du processus de fonctionnement d’une agence et d’un statut d’auto-entrepreneur.
                    </p>
                </div>
                <div style={{ margin: '30px 0' }}>
                    <Heading style={{ marginTop: '10px', marginBottom: '0' }} tag="h3">Analyste et développeur web</Heading>
                    <span className="h3-subtitle"> Titre RNCP Niveau II - IMIE, Nantes (44)</span>
                    <p>
                        Développement Front-end & Back-end en Symfony et Laravel.
                    </p>
                </div>
                <div style={{ margin: '30px 0' }}>
                    <Heading style={{ marginTop: '10px', marginBottom: '0' }} tag="h3">Webdesigner et architecte web</Heading>
                    <span className="h3-subtitle"> Titre RNCP Niveau II - IMIE, Nantes (44)</span>
                    <p>
                        Gestion de l'architecture (Arborescence, User Map, SEO) et de l’UI/UX d’un site. 
                    </p>
                </div>
                <div style={{ margin: '30px 0' }}>
                    <Heading style={{ marginTop: '10px', marginBottom: '0' }} tag="h3">Licence professionelle analyste et développeur logiciel</Heading>
                    <span className="h3-subtitle">Titre Universitaire +3 - Nantes (44)</span>
                    <p>
                        Architectures profondes d’applications en NodeJs, Java, Javascript et ainsi que d’autres technologies.
                    </p>
                </div>
                <div style={{ margin: '30px 0' }}>
                    <Heading style={{ marginTop: '10px', marginBottom: '0' }} tag="h3">BTS Développeur et administrateur système</Heading>
                    <span className="h3-subtitle">Brevet de technicien supérieur, Le mans (72)</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </Col>
        </Row>
    )

} 

export default Educations
