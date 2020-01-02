import React from 'react'
import { Row, Col, Button } from 'antd'
import { Heading, CardExpertises, Container } from 'components'
import Fade from 'react-reveal/Fade'

import desktopIcon from 'assets/icons/desktop.svg'
import mobileIcon from 'assets/icons/mobile.svg'
import editorialIcon from 'assets/icons/editorial.svg'

import styles from './Expertises.module.css'

import github from "assets/icons/github.svg"
import dribbble from "assets/icons/dribbble.svg"
import behance from "assets/icons/behance.svg"

import background from "assets/images/design.png"

const Expertises = () => {

    return (
        <div name="expertises" className={styles.container}>
            <Container>
                <Row className={styles.wrapper}>
                    <Fade delay={500}>
                        <Col span={24}>
                            <Heading tag="h2">Je développe des interfaces pour de multiples supports</Heading>
                            <p>Après plusieurs années à me chercher et à trouver l’inspiration, j’ai trouvé un domaine qui me correspond par rapport à mes aspirations personnels : le soucis du détail, l’empathie pour les utilisateurs, la logique et les belles réalisations. J’ai découvert le poste de développeur front-end au moment de l’emergence des framework Javascript : React, Angular, Vue. J’ai pu développer mes affinités avec React qui se basait principalement sur la notion de composants. Je me spécialise sur cette technologie depuis ces deux dernières années.</p>
                            <Button href="https://github.com/Ninglight" type="link" target="_blank" className={styles.button} >
                                <img src={github} alt="Logo github" className={styles.button}/>
                                voir mon travail sur github
                            </Button>
                        </Col>
                    </Fade>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={24} sm={12} lg={8}>
                        <Fade delay={1000}>
                            <CardExpertises
                                imgSrc={desktopIcon}
                                imgAlt="icon desktop"
                                title="Application web ou PWA"
                                content="React, redux, rxjs, gatsby, hugo, polymer, laravel, nodejs, webpack, angular, sass, jamstack, les solutions cloud."
                            />
                        </Fade>
                    </Col>
                    <Col span={24} sm={12} lg={8}>
                        <Fade delay={1500}>
                            <CardExpertises
                                imgSrc={mobileIcon}
                                imgAlt="icon mobile"
                                title="Application mobile"
                                content="React Native, ionic, expo."
                            />
                        </Fade>
                    </Col>
                    <Col span={24} sm={12} lg={8}>
                        <Fade delay={2000}>
                            <CardExpertises
                                imgSrc={editorialIcon}
                                imgAlt="icon editorial"
                                title="Site éditoriaux avec la JAMstack"
                                content="Gatsby, hugo, déploiement sur le cloud, prismic, ghost, CI/CD."
                            />
                        </Fade>
                    </Col>
                </Row>
            </Container>
            <div className={styles.wrapperBackground}>
                <Container>
                    <Row>
                        <Fade delay={1500}>
                            <Col span={24} md={16}>
                                <Heading tag="h2">J’ai étudié l’UI et l’UX design durant 2 ans</Heading>
                                <p>
                                    Les interfaces ont toujours était le côté le plus jubilatoire de mon travail. 
                                    Les principes de l’UX ont toujours été essentiel dans la conception des projets auquel je participant. 
                                    C’est dans l’optique d’approfondir cette reflexion que je me suis réorrienté pour une seconde licence en UI/UX Design et en développement front-end. 
                                    J’ai pu y exercé : Interview, tests utilisateur, zoning, wireframing, prototyping, experience map, mobile first, atomic design, iconographie, support print.
                                </p>
                                <Button href="https://dribbble.com/valentinbourreau" target="_blank" type="link" className={styles.button}>
                                    <img src={dribbble} alt="Logo dribbble"/>
                                    voir mes travaux sur dribbble
                                </Button>
                                <Button href="https://www.behance.net/valentinbourreau" target="_blank" type="link" className={styles.button}>
                                    <img src={behance} alt="Logo behance"/>
                                    voir mes travaux sur behance
                                </Button>
                            </Col>
                        </Fade>
                    </Row>
                </Container>
                <Fade right delay={2000}>
                    <div className={styles.background}>
                        <img src={background} alt="wireframe from sketch" />
                    </div>
                </Fade>
            </div>
            <div className={styles.wrapper}>
                <Container>
                    <Row>
                        <Fade delay={1000}>
                            <Col span={24}>
                                <Heading tag="h2">J’ai un intérêt important pour la gestion et la vue d’ensemble d’un projet</Heading>
                                <p>Ma dernière année d’étude était centré sur la gestion de projet et m’a sensibilisé à la gestion d’une équipe, aux méthodologies de gestion de projet (Agilité, scrum, extrem programming, lean software development), à la délégation et aux notions financières. De plus, mon implication au sein de l’agence web Troopers, une entreprise libérée, m’a permit de mettre en pratique la théorie apprise au sein de l’IMIE et  découvrir les problématiques de gouvernance de divers typologies de projet.</p>
                            </Col>
                        </Fade>
                    </Row>
                </Container>
            </div>
            
        </div>
    )

} 

export default Expertises
