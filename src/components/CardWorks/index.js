import React from "react"
import { Link } from "gatsby"
import Heading from "../Heading"

import styles from './CardWorks.module.css'

const CardWorks = ({ imgSrc, imgAlt, title, expertises, content, link }) => {

    return (
        <Link to={link}>
            <div className={styles.container}>
                <img className={styles.img} src={imgSrc} alt={imgAlt} />
                <Heading className={styles.title} tag="h3">{title}</Heading>
                <span className="h3-subtitle">{expertises.map((expertise, index) => `${expertise}${index + 1 === expertises.length ? '' : ', '}`)}</span>
                <p>{content}</p>
            </div>
        </Link>
    )

} 

export default CardWorks
