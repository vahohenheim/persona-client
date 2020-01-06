import React from 'react'
import { StickyContainer } from 'react-sticky'
import { SEO } from 'components'
import { Header, Footer } from 'layouts'
import { DetailsWorks } from 'landings'

import 'styles/main.less'
import 'assets/fonts/styles.css'

const Index = () => {

    return (
        <StickyContainer style={{ position: 'relative' }}>
            <SEO title="SoWeSign" description="Lorem ipsum sit dolor amet" />
            <Header />
            <DetailsWorks.Sowesign />
            <Footer />
        </StickyContainer>
    )
} 

export default Index
