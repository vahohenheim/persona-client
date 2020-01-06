import React from 'react'
import { Form, Input, Button } from 'antd'
import ReCAPTCHA from 'react-google-recaptcha'

import styles from './FormContact.module.css'

const { TextArea } = Input;

const FormContact = ({ form }) => {

    const { getFieldDecorator } = form

    return (
        <form action="/" className={styles.form} netlify>
            <Form.Item label="Votre nom" hasFeedback >
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: "Renseignez un nom, s'il vous plait" }],
                })(
                    <Input className={styles.input} size="large" />,
                )}
            </Form.Item>
            <Form.Item label="Votre adresse mail" hasFeedback>
                {getFieldDecorator('email', {
                    rules: [
                        { 
                            type: 'email',
                            message: "Vous n'avez pas saisi une adresse mail valide.",
                        },
                        { 
                            required: true, 
                            message: "Renseignez une adresse mail, s'il vous plait" 
                        },
                    ],
                })(
                    <Input type="email" size="large" />,
                )}
            </Form.Item>
            <Form.Item label="Votre message" hasFeedback>
                {getFieldDecorator('message', {
                    rules: [{ required: true, message: "Renseignez un message, s'il vous plait" }],
                })(
                    <TextArea size="large" rows={6} />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                    Envoyer votre message
                </Button>
            </Form.Item>
        </form>
    )

} 

const WrappedFormContact = Form.create({ name: 'contact' })(FormContact);
export default WrappedFormContact
