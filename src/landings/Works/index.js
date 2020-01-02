import React from 'react'
import { Row, Col } from 'antd'
import { Heading, CardWorks, Container } from 'components'
import Fade from 'react-reveal/Fade'

import bicloon from 'assets/images/bicloon.jpg'
import monument from 'assets/images/monument.jpg'
import tandem from 'assets/images/tandem.jpg'
import dailyui from 'assets/images/dailyui.jpg'

const Works = () => {

    return (
        <Container style={{ margin: '80px auto' }}>
            <Row name="works">
                <Col span={24}>
                    <Fade delay={500}>
                        <Heading style={{ marginBottom: '40px' }} tag="h2">J'ai travaillé sur</Heading>
                    </Fade>
                </Col>
                <Col span={24} sm={12} xl={8}>
                    <Fade delay={1000}>
                        <CardWorks 
                            imgSrc={bicloon}
                            link="/bicloon/"
                            imgAlt="miniature bicloon"
                            title="Bicloon"
                            content="Une appli de location de vélo et guide touristique sur Nantes"
                            expertises={["UX Design", "UI Design"]}
                        />
                    </Fade>
                </Col>
                <Col span={24} sm={12} xl={8}>
                    <Fade delay={1500}>
                        <CardWorks 
                            imgSrc={tandem}
                            link="/tandem/"
                            imgAlt="miniature tandem"
                            title="Tandem"
                            content="Un site éditorial pour une association"
                            expertises={["UX Design", "UI Design", "Développement Wordpress"]}
                        />
                    </Fade>
                </Col>
                <Col span={24} sm={12} xl={8}>
                    <Fade delay={2000}>
                        <CardWorks 
                            imgSrc={monument}
                            link="/monument/"
                            imgAlt="miniature monument"
                            title="Monument"
                            content="Une série d’illustration de monuments"
                            expertises={["UI Design"]}
                        />
                    </Fade>
                </Col>
                <Col span={24} sm={12} xl={8}>
                    <Fade delay={2000}>
                        <CardWorks 
                            imgSrc={dailyui}
                            link="/dailyui/"
                            imgAlt="miniature dailyui"
                            title="Daily UI"
                            content="Une participation au challenge pour pratiquer le design"
                            expertises={["UX Design", "UI Design"]}
                        />
                    </Fade>
                </Col>
            </Row>
        </Container>
    )

} 

export default Works
