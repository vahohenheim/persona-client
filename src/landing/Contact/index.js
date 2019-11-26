import React from "react"
import { Row, Col } from 'antd'
import Heading from "../../components/Heading"
import FormContact from "../../components/FormContact"

const Contact = () => {

    return (
        <Row name="contact" type="flex" justify="center" style={{ padding: '80px 0' }}>
            <Col span={24}>
                <Heading tag="h2">Si vous avez des projets à réaliser, des opportunités à me proposer ou tout simplement prendre contact</Heading>
            </Col>
            <Col span={24} lg={16}>
                <FormContact />
            </Col>
        </Row>
    )

} 

export default Contact
