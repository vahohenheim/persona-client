import React from 'react'
import { Link as LinkGatsby } from 'gatsby'
import { Row, Col } from 'antd'
import { Heading, Container } from 'components'
import Fade from 'react-reveal/Fade'

import main from "assets/images/bicloon/main.png"

import styles from './Bicloon.module.css'

const Bicloon = () => {

    return (   
        <Container className={styles.container}>
            <Row className={styles.details}>
                <Col span={24}>
                    <LinkGatsby className={styles.back} to="/#works">
                        <svg width="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"/></svg>
                        Précédent
                    </LinkGatsby>
                    <Heading tag="h1">Bicloon</Heading>
                    <p>Une application de location de vélo et guide touristique nantais</p>
                </Col>
            </Row>
             <Fade delay={2000}>
                <Row className={styles.header}>
                    <Col span={24} >
                        <img className={styles.mainImg} src={main} alt="presentation of bicloon"/>
                        
                        <p>Ce projet a débuté dans le cadre d’un projet tutoré, au sein de l’IMIE. Durant une formation à l’UX/UI Design, une mise en pratique des méthodologies de l’UX design a été exercé.</p>
                        <p>Le sujet inital était : Exploiter le workflow UX pour une application de location de vélo sur Nantes.</p>
                    </Col>
                </Row>
             </Fade>
             <Fade delay={2000}>
                <Row className={styles.row}>
                    <Col span={24}>
                        <Heading tag="h2">Phase d’exploration</Heading>
                        <p>Afin de découvrir les habitudes de personnes, au hasard, nous avons réalisé des entretiens avec d’autres camarades. Durant ces entretiens semi-directifs nous avons pu recueillir nombreuses informations, en suivant notre guide d’entretien et en s’adaptant aux réponses des sondés.</p>
                        <p>Suite à une phase d’enquête exploratoire, nous avons pu extraire aux mieux les informations des entretiens. Nous avons pu extraire des types de profils. Ces types de profils, après analyse et catégorisation, ont abouti à des proto-personas.</p>
                    </Col>
                </Row>
             </Fade>
             <Fade delay={2600}>
                <Row className={styles.row}>
                    <Col span={24}>
                        <Heading tag="h2">Phase d’idéation</Heading>
                        <p>Afin de perfectihonner la phase d’exploration, l’utilisation des UX cards a permis d’étoffer les idées.</p>
                        <p>Après la création d’un scénario d’usage, nous avons pu retracer et décrire le parcours utilisateur de cette application.</p>
                        <p>Une expérience map a pu été modéliser, illustrant les actions, pensées et émotions.</p>
                    </Col>
                </Row>
             </Fade>
             <Fade delay={2600}>
                <Row className={styles.fonctionnality}>
                    <Col span={24}>
                        <Heading tag="h2">Fonctionnalités majeures</Heading>
                    </Col>
                    <Col md={8}>
                        <div className={styles.card}>
                            Location de vélo sur Nantes
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className={styles.card}>
                            Itinéraire à vélo ou à pied
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className={styles.card}>
                            Guide touristique nantais
                        </div>
                    </Col>
                </Row>
             </Fade>
             <Fade delay={2600}>
                <Row className={styles.row}>
                    <Col span={24}>
                        <Heading tag="h2">Phase de Génération</Heading>
                        <p>L’arborescence a pu être conçue en décrivant les écrans et les fonctionnalités.</p>
                        <p>Ne restant plus qu’à produire un rendu visuel de l’application en faible fidélité, nous avons utilisé l’UI Kit de Material design pour rendre compte de nos recherches.</p>
                        <p>Suite à cela, nous avions de quoi faire tester notre application. Un plan de test, composé du scénario, nous a permis de guider nos tests. Suite à cette synthèse, nous avons abouti à des prises de décision sur le détail de nos fonctionnalités et la navigation dans notre application.</p>
                        <p>Réalisé à titre personnel, je me suis permis d’approfondir la réalisation de ces wireframes, en démarrant la phase de maquettage sur l’identité de l’application. Ce qui vous est présenté visuellement en est le résultat.</p>
                    </Col>
                </Row>
             </Fade>
        </Container>
    )

} 

export default Bicloon
