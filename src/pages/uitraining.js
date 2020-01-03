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
            <SEO title="UI Training" description="Lorem ipsum sit dolor amet" />
            <Header />
            <DetailsWorks.UITraining />
            <Footer />
        </StickyContainer>
    )
} 

export default Index
