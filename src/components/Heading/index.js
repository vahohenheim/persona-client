import React from "react"

import styles from './Heading.module.css'

const Heading = ({ tag, children, ...props }) => {

    return React.createElement(tag, {
        ...props,
        className: `${styles[tag]} ${props.className}`
    }, children)

} 

export default Heading
