import React from "react"
import { Row, Col } from 'antd'
import Heading from "../../components/Heading"

const Experiences = () => {

    return (
        <Row style={{ padding: '80px 0' }}>
            <Col span={24}>
                <Heading tag="h2">J’ai travaillé en tant que</Heading>
                <div style={{ margin: '30px 0' }}>
                    <Heading style={{ marginTop: '10px', marginBottom: '0' }} tag="h3">Développeur front-end</Heading>
                    <span className="h3-subtitle">Troopers Agency, Nantes (44)</span>
                    <p>
                        Intégration au sein d’une agence web agile à gouvernance partagée, particulièrement dans le service Front-end où j’ai rencontré divers projets :
                    </p>
                    <ul>
                        <li>Application web en React, Redux, Rxjs.</li>
                        <li>Application hybrid avec Expo, React Native.</li>
                        <li>Intégration et Styleguide en JSX, Twig avec Tailwind, Ant Design.</li>
                    </ul>
                </div>
                <div style={{ margin: '30px 0' }}>
                    <Heading style={{ marginTop: '10px', marginBottom: '0' }} tag="h3">Designer graphique</Heading>
                    <span className="h3-subtitle">Connexing, Nantes (44)</span>
                    <p>
                        Zoning, wireframing et maquette avec Sketch pour un audit UX, un redesign de site web et une application.
                        Création de visuel pour un service marketing avec Illustrator, Photoshop et Indesign pour du social media, des packagings et des catalogues.
                    </p>
                </div>
                <div style={{ margin: '30px 0' }}>
                    <Heading style={{ marginTop: '10px', marginBottom: '0' }} tag="h3">Analyste et développeur Web</Heading>
                    <span className="h3-subtitle">Département du Maine et Loire, Angers (42)</span>
                    <p>
                        Analyse pour une solution de monitoring d’imprimante à l’échelle du département.
                        Solution apportée : Une API REST en Laravel, un outil en PERL et une application en AngularJs 1.6 et Polymer 1.5.
                    </p>
                </div>
                <div style={{ margin: '30px 0' }}>
                    <Heading style={{ marginTop: '10px', marginBottom: '0' }} tag="h3">Développeur logiciel et administrateur système</Heading>
                    <span className="h3-subtitle">Drouault, Le Mans (72)</span>
                    <p>
                        Développement sur l’ERP Silog, de l’assistance utilisateur et la gestion d’un réseau industriel, en tant qu’assistant.
                    </p>
                </div>
            </Col>
        </Row>
    )

} 

export default Experiences
