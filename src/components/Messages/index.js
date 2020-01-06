import React from 'react'

import styles from './Messages.module.css'

import success from 'assets/icons/success.svg'
import error from 'assets/icons/error.svg'


const Message = ({ type }) => {

    const content = {
        success: "Merci ! Votre message m’a bien été envoyé, je tacherai de vous répondre dans les plus brefs délais.",
        error: "Oups ! Il semble y avoir un problème. Veuillez ressayer plus tard, ou envoyer moi un mail à l’adresse valentin.bourreau@gmail.com."
    }

    const icon = {
        success: success,
        error: error
    }

    return (
        <div className={`${styles.container} ${styles[type]}`}>
            <img src={icon[type]} alt={`${type} de l'envoi du message`} />
            <p>{content[type]}</p>
        </div>
    )
}

export default Message
