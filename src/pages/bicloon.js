import React from 'react'
import { StickyContainer } from 'react-sticky'
import { Heading, SEO, Container, Background } from 'components'
import { Header, Footer } from 'layouts'

import 'styles/main.less'
import 'assets/fonts/styles.css'


const Index = () => {

    return (
        <StickyContainer style={{ position: 'relative' }}>
            <SEO title="Bicloon" description="Lorem ipsum sit dolor amet" />
            {/*<Launching />*/}
            <Background />
            <Header />
            <Container>
                <Heading tag="h1" >Bicloon</Heading>
                <p>Une application de location de vélo et guide touristique nantais</p>
                <p>Ce projet a débuté dans le cadre d’un projet tutoré, au sein de l’IMIE. Durant une formation à l’UX/UI Design, une mise en pratique des méthodologies de l’UX design a été exercé.</p>
                <p>Le sujet inital était : Exploiter le workflow UX pour une application de location de vélo sur Nantes.</p>

                <Heading tag="h2">Phase d’exploration</Heading>
                <p>Afin de découvrir les habitudes de personnes, au hasard, nous avons réalisé des entretiens avec d’autres camarades. Durant ces entretiens semi-directifs nous avons pu recueillir nombreuses informations, en suivant notre guide d’entretien et en s’adaptant aux réponses des sondés.</p>
                <p>Suite à une phase d’enquête exploratoire, nous avons pu extraire aux mieux les informations des entretiens. Nous avons pu extraire des types de profils. Ces types de profils, après analyse et catégorisation, ont abouti à des proto-personas.</p>
            </Container>
            <Footer />
        </StickyContainer>
    )
} 

export default Index
