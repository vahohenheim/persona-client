import React from "react"
import { Row, Col } from 'antd'
import Heading from "../../components/Heading"
import FormContact from "../../components/FormContact"

const Contact = () => {

    return (
        <Row name="contact" style={{ margin: '160px 0' }}>
            <Col span={24}>
                <Heading tag="h2">Si vous avez des projets à réaliser, des opportunités à me proposer ou tout simplement prendre contact</Heading>
                
            </Col>
            <Col lg={18}>
                <FormContact />
            </Col>
        </Row>
    )

} 

export default Contact
