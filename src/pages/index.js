import React from "react"
import { StickyContainer } from 'react-sticky'
import config from 'react-reveal/globals'
import { SEO } from 'components'
import { Header, Footer } from 'layouts'
import { About, Expertises, Works, Contact } from 'landings'

import 'styles/main.less'
import 'assets/fonts/styles.css'

config({ ssrFadeout: true })

const Index = () => {

    return (
        <StickyContainer style={{ position: 'relative' }}>
            <SEO title="valentinbourreau" description="a website for show my works and my expertises" />
            <Header />
            <About />
            <Expertises />
            <Works />
            <Contact />
            <Footer />
        </StickyContainer>
    )
} 

export default Index
