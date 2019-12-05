import React from "react"
import { StickyContainer } from 'react-sticky'
import { Launching, SEO, Background } from 'components'
import { Header, Footer } from 'layouts'
import { About, Expertises, Works, Contact } from 'landings'

import 'styles/main.less'
import 'assets/fonts/styles.css'

const Index = () => {

    return (
        <StickyContainer style={{ position: 'relative' }}>
            <SEO title="valentinbourreau" description="a website for show my works and my expertises" />
            {/* <Launching /> */}
            <Background />
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
