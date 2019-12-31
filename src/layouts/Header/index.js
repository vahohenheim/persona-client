import React from 'react'
import { Sticky } from 'react-sticky'
import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade'

import styles from './Header.module.css'

import logo from 'assets/icons/valentinbourreau.svg'

const Header = () => {

    return (
        <Sticky>{({ style }) => (
            <header style={style} className={styles.container} >
                <Fade delay={1000}>
                    <img src={logo} alt="logo valentinbourreau" />
                </Fade>
                <Fade delay={1500}>
                    <ul className={styles.navigation}>
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={1200}>
                            <li className={styles.item}>
                                à propos
                            </li>
                        </Link>
                        <Link activeClass="active" to="expertises" spy={true} smooth={true} offset={-150} duration={1200}>
                            <li className={styles.item}>
                                compétences
                            </li>
                        </Link>
                        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-150} duration={1200}>
                            <li className={styles.item}>
                                travaux
                            </li>
                        </Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1200}>
                            <li className={styles.item}>
                                contact
                            </li>
                        </Link>
                    </ul>
                </Fade>
                
                
            </header>
        )}
        </Sticky>
        
        
    )

} 

export default Header
