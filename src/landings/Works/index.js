import React from 'react'
import { Row, Col } from 'antd'
import { Heading, CardWorks, Container } from 'components'
import Fade from 'react-reveal/Fade'

import bicloon from 'assets/images/bicloon.jpg'
import monument from 'assets/images/monument.jpg'
import tandem from 'assets/images/tandem.jpg'
import dailyui from 'assets/images/dailyui.jpg'
import mygoodplace from 'assets/images/mygoodplace.jpg'
import sowesign from 'assets/images/sowesign.jpg'
import edycem from 'assets/images/edycem.jpg'

import iconBicloon from 'assets/icons/bicloon.svg'
import iconMonument from 'assets/icons/monument.svg'
import iconTandem from 'assets/icons/tandem.svg'
import iconUitraining from 'assets/icons/ui-training.svg'
import iconMygoodplace from 'assets/icons/mygoodplace.svg'
import iconSowesign from 'assets/icons/sowesign.svg'
import iconEdycem from 'assets/icons/edycem.svg'

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
                            icon={iconBicloon}
                            link="/bicloon/"
                            imgAlt="miniature bicloon"
                            content="Une appli de location de vélo et guide touristique sur Nantes"
                            expertises={["UX Design", "UI Design"]}
                        />
                    </Fade>
                </Col>
                <Col span={24} sm={12} xl={8}>
                    <Fade delay={1200}>
                        <CardWorks 
                            imgSrc={tandem}
                            icon={iconTandem}
                            link="/tandem/"
                            imgAlt="miniature tandem"
                            content="Un site éditorial pour une association"
                            expertises={["UX Design", "UI Design", "Développement Wordpress"]}
                        />
                    </Fade>
                </Col>
                <Col span={24} sm={12} xl={8}>
                    <Fade delay={1400}>
                        <CardWorks 
                            imgSrc={monument}
                            icon={iconMonument}
                            link="/monument/"
                            imgAlt="miniature monument"
                            content="Une série d’illustration de monuments"
                            expertises={["UI Design"]}
                        />
                    </Fade>
                </Col>
                <Col span={24} sm={12} xl={8}>
                    <Fade delay={1600}>
                        <CardWorks 
                            imgSrc={dailyui}
                            icon={iconUitraining}
                            link="/uitraining/"
                            imgAlt="miniature dailyui"
                            content="Une participation au challenge pour pratiquer le design"
                            expertises={["UX Design", "UI Design"]}
                        />
                    </Fade>
                </Col>
                <Col span={24} sm={12} xl={8}>
                    <Fade delay={1800}>
                        <CardWorks 
                            imgSrc={mygoodplace}
                            icon={iconMygoodplace}
                            link="/mygoodplace/"
                            imgAlt="miniature mygoodplace"
                            content="Une appli d’accès et de gestion de location"
                            expertises={["UI Design", "Web app"]}
                        />
                    </Fade>
                </Col>
                <Col span={24} sm={12} xl={8}>
                    <Fade delay={2000}>
                        <CardWorks 
                            imgSrc={sowesign}
                            icon={iconSowesign}
                            link="/sowesign/"
                            imgAlt="miniature sowesign"
                            content="Une appli de dématerialisation de signature"
                            expertises={["UX Design", "UI Design", "Web app"]}
                        />
                    </Fade>
                </Col>
                <Col span={24} sm={12} xl={8}>
                    <Fade delay={2200}>
                        <CardWorks 
                            imgSrc={edycem}
                            icon={iconEdycem}
                            link="/edycem/"
                            imgAlt="miniature edycem"
                            content="Une appli de gestion des heures éligibles aux crédits CIR"
                            expertises={["Hybrid app", "UI Design"]}
                        />
                    </Fade>
                </Col>
            </Row>
        </Container>
    )

} 

export default Works
