import React from "react"
import { StickyContainer } from 'react-sticky';

import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import About from "../landing/About"
import Expertises from "../landing/Expertises"
import Works from "../landing/Works"
import Experiences from "../landing/Experiences"
import Educations from "../landing/Educations"
import Contact from "../landing/Contact"

import Launching from "../components/Launching"
import Background from '../components/Background'
import Container from '../components/Container'
import SEO from "../components/SEO"

import 'antd/dist/antd.css'
import '../styles/global.css'
import '../assets/fonts/styles.css'

const Index = () => {

    return (
        <StickyContainer style={{ position: 'relative' }}>
            <SEO title="valentinbourreau" description="a website for show my works and my expertises" />
            {/*<Launching />*/}
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
