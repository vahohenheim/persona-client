import React from "react"
import { Sticky } from 'react-sticky';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import styles from './Header.module.css'

import logo from '../../assets/icons/valentinbourreau.svg'

const Header = () => {

    const handleSetActive = (to) => {
        console.log(to)
    }

    return (
        <Sticky>{({ style }) => (
            <header style={style} className={styles.container} >
                <img src={logo} alt="logo valentinbourreau" />
                <ul className={styles.navigation}>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-150} duration={1500} onSetActive={handleSetActive}>
                        <li className={styles.item}>
                            à propos
                        </li>
                    </Link>
                    <Link activeClass="active" to="expertises" spy={true} smooth={true} offset={-150} duration={1500} onSetActive={handleSetActive}>
                        <li className={styles.item}>
                            expertises
                        </li>
                    </Link>
                    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-150} duration={1500} onSetActive={handleSetActive}>
                        <li className={styles.item}>
                            productions
                        </li>
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-150} duration={1500} onSetActive={handleSetActive}>
                        <li className={styles.item}>
                            contact
                        </li>
                    </Link>
                </ul>
            </header>
        )}
        </Sticky>
        
        
    )

} 

export default Header
