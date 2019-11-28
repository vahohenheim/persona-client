import React from "react"
import { Form, Input, Button } from 'antd'

import styles from './FormContact.module.css'

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
        <Form style={{  }} onSubmit={handleSubmit} >
            <Form.Item label="Your name" hasFeedback>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please, enter a name' }],
                })(
                    <Input className={styles.input} size="large" />,
                )}
            </Form.Item>
            <Form.Item label="Your mail adress" hasFeedback>
                {getFieldDecorator('email', {
                    rules: [
                        { 
                            type: 'email',
                            message: 'Your input is not valid mail adress ',
                        },
                        { 
                            required: true, 
                            message: 'Please, enter a mail adress' 
                        },
                    ],
                })(
                    <Input type="email" size="large" />,
                )}
            </Form.Item>
            <Form.Item label="Your message" hasFeedback>
                {getFieldDecorator('Votre message', {
                    rules: [{ required: true, message: 'Please, enter a message' }],
                })(
                    <TextArea size="large" rows={6} />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                    Send me a message
                </Button>
            </Form.Item>
        </Form>
    )

} 

const WrappedFormContact = Form.create({ name: 'contact' })(FormContact);
export default WrappedFormContact
