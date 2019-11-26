import React from "react"
import { Form, Input, Button } from 'antd'

const { TextArea } = Input;

const FormContact = ({ form }) => {

    const { getFieldDecorator } = form;

    const handleSubmit = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };

    return (
        <Form style={{ margin: '0 -15px' }} onSubmit={handleSubmit} >
            <Form.Item label="Votre nom" hasFeedback>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Veuillez renseigner votre nom' }],
                })(
                    <Input size="large" />,
                )}
            </Form.Item>
            <Form.Item label="Votre adresse mail" hasFeedback>
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Veuillez renseigner votre adresse mail' }],
                })(
                    <Input size="large" />,
                )}
            </Form.Item>
            <Form.Item label="Votre message" hasFeedback>
                {getFieldDecorator('Votre message', {
                    rules: [{ required: true, message: 'Veuillez renseigner votre message' }],
                })(
                    <TextArea size="large" rows={6} />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                    Envoyer votre message
                </Button>
            </Form.Item>
        </Form>
    )

} 

const WrappedFormContact = Form.create({ name: 'contact' })(FormContact);
export default WrappedFormContact
