import React from 'react'
import { Row, Col } from 'antd'
import { StickyContainer } from 'react-sticky'
import { Heading, SEO, Container } from 'components'
import { Header, Footer } from 'layouts'
import { Bicloon } from 'landings'

import 'styles/main.less'
import 'assets/fonts/styles.css'



const Index = () => {

    return (
        <StickyContainer style={{ position: 'relative' }}>
            <SEO title="Bicloon" description="Lorem ipsum sit dolor amet" />
            <Header />
            <Bicloon />
            <Footer />
        </StickyContainer>
    )
} 

export default Index
