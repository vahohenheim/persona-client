import React from "react"
import { Row, Col } from 'antd'
import Heading from "../../components/Heading"
import FormContact from "../../components/FormContact"
import Container from "../../components/Container"

const Contact = () => {

    return (
        <Container>
            <Row name="contact" type="flex" justify="center" style={{ textAlign: 'center', padding: '80px 0' }}>
                <Col span={14}>
                    <Heading tag="h2">Contact me</Heading>
                    <p>If you have a project, a opportunity to me or just talk about somthing, please feel free to contact me.</p>
                </Col>
                <Col span={22} lg={16}>
                    <FormContact />
                </Col>
            </Row>
        </Container>
    )

} 

export default Contact
