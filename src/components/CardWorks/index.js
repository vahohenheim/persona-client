import React from "react"
import Heading from "../Heading"

import styles from './CardWorks.module.css'

const CardWorks = ({ imgSrc, imgAlt, title, expertises, content }) => {

    return (
       <div className={styles.card}>
            <img className={styles.img} src={imgSrc} alt={imgAlt} />
            <Heading style={{ marginTop: '10px', marginBottom: '0' }} tag="h3">{title}</Heading>
            <span className="h3-subtitle">{expertises.map((expertise) => expertise)}</span>
            <p>{content}</p>
        </div>
    )

} 

export default CardWorks
