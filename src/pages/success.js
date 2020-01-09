import React from 'react'
import { StickyContainer } from 'react-sticky'
import { SEO, Container } from 'components'
import { Header, Footer } from 'layouts'
import { Link } from 'gatsby'

import 'styles/main.less'
import 'assets/fonts/styles.css'

const Index = () => {

    return (
        <StickyContainer style={{ position: 'relative' }}>
            <SEO title="Merci de votre message" description="Lorem ipsum sit dolor amet" />
            <Header />
            <Container>
                <h1>Merci</h1>
                <p>
                    Votre message m’a bien été envoyé, je tacherai de vous répondre dans les plus brefs délais.
                </p>
                <Link to="/">
                    Retourner à la page d'accueil
                </Link>
            </Container>
            <Footer />
        </StickyContainer>
    )
} 

export default Index
