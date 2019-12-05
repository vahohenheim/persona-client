import React from 'react'
import { Row, Col } from 'antd'
import { Container } from 'components'

import styles from './Background.module.css'

const Background = () => {

    return (
        <div className={styles.container}>
            <Container className={styles.wrapper}>
                <Row className={styles.wrapper}>
                    <Col span={4} className={styles.column} />
                    <Col span={4} className={styles.column} />
                    <Col span={4} className={styles.column} />
                    <Col span={4} className={styles.column} />
                    <Col span={4} className={styles.column} />
                    <Col span={4} className={styles.column} />
                </Row>
            </Container>
        </div>
    )

} 

export default Background
