import React from "react"
import Heading from "../Heading"

import styles from './CardExpertises.module.css'

const CardExpertises = ({ imgSrc, imgAlt, title, content }) => {

    return (
        <div className={styles.container}>
             <img src={imgSrc} alt={imgAlt} />
             <Heading className={styles.title} tag="h3">{title}</Heading>
             <p>{content}</p>
         </div>
     )

} 

export default CardExpertises
