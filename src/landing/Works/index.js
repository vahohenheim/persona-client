import React from "react"
import { Row, Col } from 'antd'
import Fade from 'react-reveal/Fade'

import CardWorks from "../../components/CardWorks"
import Heading from "../../components/Heading"

import bicloon from '../../assets/images/bicloon.jpg'
import monument from '../../assets/images/monument.jpg'
import tandem from '../../assets/images/tandem.jpg'
import dailyui from '../../assets/images/dailyui.jpg'
import Container from "../../components/Container"

const Works = () => {

    return (
        <Container style={{ padding: '80px 0' }}>
            <Row name="works">
                <Col span={24}>
                    <Fade delay={500}>
                        <Heading style={{ marginBottom: '40px' }} tag="h2">What i made</Heading>
                    </Fade>
                </Col>
                <Col sm={12} lg={8}>
                    <Fade delay={1000}>
                        <CardWorks 
                            imgSrc={bicloon}
                            link="bicloon"
                            imgAlt="miniature bicloon"
                            title="Bicloon"
                            content="Application de location de vélo et de guide touristique sur Nantes."
                            expertises={["UX Design", "UI Design"]}
                        />
                    </Fade>
                    
                </Col>
                <Col sm={12} lg={8}>
                    <Fade delay={1500}>
                        <CardWorks 
                            imgSrc={tandem}
                            link="tandem"
                            imgAlt="miniature tandem"
                            title="Tandem"
                            content="Site web d'une association d'assistance psychologique de 3 à 25 ans."
                            expertises={["UX Design", "UI Design", "Développement Wordpress"]}
                        />
                    </Fade>
                </Col>
                <Col sm={12} lg={8}>
                    <Fade delay={2000}>
                        <CardWorks 
                            imgSrc={monument}
                            link="monument"
                            imgAlt="miniature monument"
                            title="Monument"
                            content="Série d'illustration produite sur Illustrator."
                            expertises={["UI Design"]}
                        />
                    </Fade>
                </Col>
                <Col sm={12} lg={8}>
                    <Fade delay={2000}>
                        <CardWorks 
                            imgSrc={dailyui}
                            link="dailyui"
                            imgAlt="miniature dailyui"
                            title="Daily UI"
                            content="Participation au challenge pour pratiquer le design."
                            expertises={["UX Design", "UI Design"]}
                        />
                    </Fade>
                </Col>
            </Row>
        </Container>
    )

} 

export default Works
