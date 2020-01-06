import React from 'react'
import { Row, Col } from 'antd'
import { Heading, Container, BackButton } from 'components'
import Fade from 'react-reveal/Fade'

import skin from "assets/images/bicloon/skin.png"
import example from "assets/images/bicloon/example.png"

import screenshot1 from "assets/images/bicloon/screenshot1-min.jpg"
import screenshot2 from "assets/images/bicloon/screenshot2-min.jpg"
import screenshot3 from "assets/images/bicloon/screenshot3-min.jpg"
import screenshot4 from "assets/images/bicloon/screenshot4-min.jpg"
import screenshot5 from "assets/images/bicloon/screenshot5-min.jpg"
import screenshot6 from "assets/images/bicloon/screenshot6-min.jpg"
import screenshot7 from "assets/images/bicloon/screenshot7-min.jpg"
import screenshot8 from "assets/images/bicloon/screenshot8-min.jpg"
import screenshot9 from "assets/images/bicloon/screenshot9-min.jpg"
import screenshot10 from "assets/images/bicloon/screenshot10-min.jpg"
import screenshot11 from "assets/images/bicloon/screenshot11-min.jpg"
import screenshot12 from "assets/images/bicloon/screenshot12-min.jpg"
import screenshot13 from "assets/images/bicloon/screenshot13-min.jpg"
import screenshot14 from "assets/images/bicloon/screenshot14-min.jpg"
import screenshot15 from "assets/images/bicloon/screenshot15-min.jpg"
import screenshot16 from "assets/images/bicloon/screenshot16-min.jpg"
import screenshot17 from "assets/images/bicloon/screenshot17-min.jpg"
import screenshot18 from "assets/images/bicloon/screenshot18-min.jpg"
import screenshot19 from "assets/images/bicloon/screenshot19-min.jpg"
import screenshot20 from "assets/images/bicloon/screenshot20-min.jpg"
import screenshot21 from "assets/images/bicloon/screenshot21-min.jpg"
import screenshot22 from "assets/images/bicloon/screenshot22-min.jpg"
import screenshot23 from "assets/images/bicloon/screenshot23-min.jpg"
import screenshot24 from "assets/images/bicloon/screenshot24-min.jpg"
import screenshot25 from "assets/images/bicloon/screenshot25-min.jpg"
import screenshot26 from "assets/images/bicloon/screenshot26-min.jpg"
import screenshot27 from "assets/images/bicloon/screenshot27-min.jpg"


import styles from './DetailsWorks.module.css'

const Bicloon = () => {

    return (   
        <Container className={styles.container}>
            <Fade delay={1500}>
                <Row className={styles.details}>
                    <Col span={24}>
                        <BackButton to="/#works"/>
                    </Col>
                </Row>
            </Fade>
             <Fade delay={1500}>
                <Row>
                    <Col span={24}>
                        <div className={`${styles.banner} ${styles.bicloon}`}>
                            <img className={styles.skin} src={skin} alt="Pattern pour bicloon"/>
                            <img className={styles.example} src={example} alt="Example de l'application bicloon"/>
                            <div className={styles.title}>
                                <Heading tag="h1">Bicloon</Heading>
                                <p className={styles.subtitle}>UX DESIGN, UI DESIGN</p>
                                <p className={styles.shortDescription}>Une application de location de vélo et guide touristique nantais</p>
                            </div>
                            <div className={styles.scrollDirection}>
                                <p>Voir en détails</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                            </div>
                        </div>
                    </Col>
                </Row>
             </Fade>
             <Fade delay={1500}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <p>Ce projet a débuté dans le cadre d’un projet tutoré, au sein de l’IMIE. Durant une formation à l’UX/UI Design, une mise en pratique des méthodologies de l’UX design a été exercé.</p>
                        <p>Le sujet inital était : Exploiter le workflow UX pour une application de location de vélo sur Nantes.</p>
                    </Col>
                </Row>
             </Fade>
             <Fade delay={1500}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h2">Phase d’exploration</Heading>
                        <p>Afin de découvrir les habitudes de personnes, au hasard, nous avons réalisé des entretiens avec d’autres camarades. Durant ces entretiens semi-directifs nous avons pu recueillir nombreuses informations, en suivant notre guide d’entretien et en s’adaptant aux réponses des sondés.</p>
                        <p>Suite à une phase d’enquête exploratoire, nous avons pu extraire aux mieux les informations des entretiens. Nous avons pu extraire des types de profils. Ces types de profils, après analyse et catégorisation, ont abouti à des proto-personas.</p>
                    </Col>
                </Row>
             </Fade>
             <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h2">Phase d’idéation</Heading>
                        <p>Afin de perfectihonner la phase d’exploration, l’utilisation des UX cards a permis d’étoffer les idées.</p>
                        <p>Après la création d’un scénario d’usage, nous avons pu retracer et décrire le parcours utilisateur de cette application.</p>
                        <p>Une expérience map a pu été modéliser, illustrant les actions, pensées et émotions.</p>
                    </Col>
                </Row>
             </Fade>
             <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h2">Fonctionnalités majeures</Heading>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={24} md={9} lg={6}>
                        <div className={styles.card}>
                            Location de vélo sur Nantes
                        </div>
                    </Col>
                    <Col span={24} md={9} lg={6}>
                        <div className={styles.card}>
                            Itinéraire à vélo ou à pied
                        </div>
                    </Col>
                    <Col span={24} md={9} lg={6}>
                        <div className={styles.card}>
                            Guide touristique nantais
                        </div>
                    </Col>
                </Row>
             </Fade>
             <Fade delay={1000}>
                <Row type="flex" justify="center" className={styles.row}>
                    <Col sm={18}>
                        <Heading tag="h2">Phase de Génération</Heading>
                        <p>L’arborescence a pu être conçue en décrivant les écrans et les fonctionnalités.</p>
                        <p>Ne restant plus qu’à produire un rendu visuel de l’application en faible fidélité, nous avons utilisé l’UI Kit de Material design pour rendre compte de nos recherches.</p>
                        <p>Suite à cela, nous avions de quoi faire tester notre application. Un plan de test, composé du scénario, nous a permis de guider nos tests. Suite à cette synthèse, nous avons abouti à des prises de décision sur le détail de nos fonctionnalités et la navigation dans notre application.</p>
                        <p>Réalisé à titre personnel, je me suis permis d’approfondir la réalisation de ces wireframes, en démarrant la phase de maquettage sur l’identité de l’application. Ce qui vous est présenté visuellement en est le résultat.</p>
                    </Col>
                </Row>
             </Fade>
            <Row type="flex" justify="center" className={styles.row}>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1000}>
                        <img className={styles.screenshot} src={screenshot1} alt="Screenshot n°1"/>
                        <img className={styles.screenshot} src={screenshot2} alt="Screenshot n°2"/>
                        <img className={styles.screenshot} src={screenshot3} alt="Screenshot n°3"/>
                        <img className={styles.screenshot} src={screenshot4} alt="Screenshot n°4"/>
                        <img className={styles.screenshot} src={screenshot5} alt="Screenshot n°5"/>
                        <img className={styles.screenshot} src={screenshot6} alt="Screenshot n°6"/>
                        <img className={styles.screenshot} src={screenshot7} alt="Screenshot n°7"/>
                        <img className={styles.screenshot} src={screenshot8} alt="Screenshot n°8"/>
                        <img className={styles.screenshot} src={screenshot9} alt="Screenshot n°9"/>
                        <img className={styles.screenshot} src={screenshot10} alt="Screenshot n°10"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1200}>
                        <img className={styles.screenshot} src={screenshot11} alt="Screenshot n°11"/>
                        <img className={styles.screenshot} src={screenshot12} alt="Screenshot n°12"/>
                        <img className={styles.screenshot} src={screenshot13} alt="Screenshot n°13"/>
                        <img className={styles.screenshot} src={screenshot14} alt="Screenshot n°14"/>
                        <img className={styles.screenshot} src={screenshot15} alt="Screenshot n°15"/>
                        <img className={styles.screenshot} src={screenshot16} alt="Screenshot n°16"/>
                        <img className={styles.screenshot} src={screenshot17} alt="Screenshot n°17"/>
                        <img className={styles.screenshot} src={screenshot18} alt="Screenshot n°18"/>
                        <img className={styles.screenshot} src={screenshot19} alt="Screenshot n°19"/>
                        <img className={styles.screenshot} src={screenshot20} alt="Screenshot n°20"/>
                    </Fade>
                </Col>
                <Col span={12} sm={9} lg={6}>
                    <Fade delay={1400}>
                        <img className={styles.screenshot} src={screenshot21} alt="Screenshot n°21"/>
                        <img className={styles.screenshot} src={screenshot22} alt="Screenshot n°22"/>
                        <img className={styles.screenshot} src={screenshot23} alt="Screenshot n°23"/>
                        <img className={styles.screenshot} src={screenshot24} alt="Screenshot n°24"/>
                        <img className={styles.screenshot} src={screenshot25} alt="Screenshot n°25"/>
                        <img className={styles.screenshot} src={screenshot26} alt="Screenshot n°26"/>
                        <img className={styles.screenshot} src={screenshot27} alt="Screenshot n°27"/>
                    </Fade>
                </Col>
            </Row>
        </Container>
    )

} 

export default Bicloon
