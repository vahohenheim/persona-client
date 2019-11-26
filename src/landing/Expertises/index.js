import React from "react"
import { Row, Col } from 'antd'
import Heading from "../../components/Heading"
import CardExpertises from "../../components/CardExpertises"

import designIcon from '../../assets/icons/design.svg'
import codeIcon from '../../assets/icons/code.svg'
import projectIcon from '../../assets/icons/project.svg'

const Expertises = () => {

    return (
        <Row name="expertises" style={{ padding: '80px 0' }}>
            <Col span={24}>
                <Heading tag="h2">J'ai pu développer mon expertise en</Heading>
            </Col>
            <Col sm={12} lg={8}>
                <CardExpertises
                    imgSrc={designIcon}
                    imgAlt="icon design"
                    title="UI/UX Design"
                    content="Interview, tests, zoning, wireframing, prototyping, experience maping, mobile first, atomic design, iconographie, print support."
                />
            </Col>
            <Col sm={12} lg={8}>
                <CardExpertises
                    imgSrc={codeIcon}
                    imgAlt="icon code"
                    title="Développeur front-end"
                    content="React, redux, rxjs, gatsby, hugo, polymer, laravel, nodejs, webpack, angular, sass, jamstack, solutions cloud."
                />
            </Col>
            <Col sm={12} lg={8}>
                <CardExpertises
                    imgSrc={projectIcon}
                    imgAlt="icon project"
                    title="Gestion de projet"
                    content="Agilité, scrum, extrem programming, lean software development, conception, roadmap."
                />
            </Col>
        </Row>
    )

} 

export default Expertises
