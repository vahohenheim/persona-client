import React from "react"
import { Row, Col } from 'antd'
import CardWorks from "../../components/CardWorks"
import Heading from "../../components/Heading"

import bicloon from '../../assets/images/bicloon.jpg'
import monument from '../../assets/images/monument.jpg'
import tandem from '../../assets/images/tandem.jpg'
import dailyui from '../../assets/images/dailyui.jpg'

const Works = () => {

    return (
        <Row name="works" style={{ padding: '80px 0' }}>
            <Col span={24}>
                <Heading tag="h2">J’ai pu produire à titre personel</Heading>
            </Col>
            <Col sm={12} lg={8}>
                <CardWorks 
                    imgSrc={bicloon}
                    imgAlt="miniature bicloon"
                    title="Bicloon"
                    content="Application de location de vélo et de guide touristique sur Nantes."
                    expertises={["UX Design", "UI Design"]}
                />
            </Col>
            <Col sm={12} lg={8}>
                <CardWorks 
                    imgSrc={tandem}
                    imgAlt="miniature tandem"
                    title="Tandem"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    expertises={["UX Design", "UI Design", "Développement Wordpress"]}
                />
            </Col>
            <Col sm={12} lg={8}>
                <CardWorks 
                    imgSrc={monument}
                    imgAlt="miniature monument"
                    title="Monument"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    expertises={["UI Design"]}
                />
            </Col>
            <Col sm={12} lg={8}>
                <CardWorks 
                    imgSrc={dailyui}
                    imgAlt="miniature dailyui"
                    title="Daily UI"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    expertises={["UX Design", "UI Design"]}
                />
            </Col>
        </Row>
    )

} 

export default Works
