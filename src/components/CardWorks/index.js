import React from 'react'
import { Link } from 'gatsby'
import { Heading } from 'components'

import styles from './CardWorks.module.css'

const CardWorks = ({ imgSrc, icon, imgAlt, expertises, content, link }) => {

    return (
        <Link to={link}>
            <div className={styles.container}>
                <img className={styles.img} src={imgSrc} alt={imgAlt} />
                <img className={styles.icon} src={icon} alt={imgAlt} />
                <div className={styles.content}>
                    <span className={styles.subtitle}>{expertises.map((expertise, index) => `${expertise}${index + 1 === expertises.length ? '' : ', '}`)}</span>
                    <Heading className={styles.title} tag="h3">{content}</Heading>
                </div>
            </div>
        </Link>
    )

} 

export default CardWorks
