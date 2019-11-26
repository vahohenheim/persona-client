import React from "react"

import styles from './Heading.module.css'

const Heading = ({ tag, children, style }) => {

    return React.createElement(tag, {
        className: styles[tag],
        style: style
    }, children)

} 

export default Heading
