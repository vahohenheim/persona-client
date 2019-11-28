import React from "react"
import { Sticky } from 'react-sticky';
import { Link } from 'react-scroll'

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
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={1200} onSetActive={handleSetActive}>
                        <li className={styles.item}>
                            about
                        </li>
                    </Link>
                    <Link activeClass="active" to="expertises" spy={true} smooth={true} offset={-150} duration={1200} onSetActive={handleSetActive}>
                        <li className={styles.item}>
                            skills
                        </li>
                    </Link>
                    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-150} duration={1200} onSetActive={handleSetActive}>
                        <li className={styles.item}>
                            works
                        </li>
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1200} onSetActive={handleSetActive}>
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
