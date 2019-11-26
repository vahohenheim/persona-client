import React from "react"
import { Row, Col } from 'antd'
import Heading from "../../components/Heading"

import designIcon from '../../assets/icons/design.svg'
import codeIcon from '../../assets/icons/code.svg'
import projectIcon from '../../assets/icons/project.svg'

const Expertises = () => {

    return (
        <Row name="expertises" style={{ margin: '160px 0' }}>
            <Col span={24}>
                <Heading tag="h2">J'ai pu développer mon expertise en</Heading>
            </Col>
            <Col sm={12} lg={8}>
                <img src={designIcon} alt="icon design"/>
                <Heading style={{ marginTop: '10px', marginBottom: '0' }} tag="h3">UI/UX Design</Heading>
                <p>Interview, tests, zoning, wireframing, prototyping, experience maping, mobile first, atomic design, iconographie, print support, design émotionnel.</p>
            </Col>
            <Col sm={12} lg={8}>
                <img src={codeIcon} alt="icon code"/>
                <Heading style={{ marginTop: '10px', marginBottom: '0' }} tag="h3">Développeur front-end</Heading>
                <p>React, redux, rxjs, gatsby, hugo, polymer, laravel, nodejs, webpack, angular, sass, jamstack, solutions cloud.</p>
            </Col>
            <Col sm={12} lg={8}>
                <img src={projectIcon} alt="icon project"/>
                <Heading style={{ marginTop: '10px', marginBottom: '0' }} tag="h3">Gestion de projet</Heading>
                <p>Agilité, scrum, extrem programming, lean software development, conception, roadmap.</p>
            </Col>
        </Row>
    )

} 

export default Expertises
