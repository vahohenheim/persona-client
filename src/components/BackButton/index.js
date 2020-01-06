import React from 'react'
import { Link } from 'gatsby'

import styles from './BackButton.module.css'

const BackButton = ({ to }) => {

    return (
        <Link className={styles.button} to={to}>
            <svg width="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"/></svg>
            Retour aux travaux
        </Link>
    )

} 

BackButton.defaultProps = {
    to: "/#works/",
}

export default BackButton
