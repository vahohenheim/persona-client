import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from "axios"
import * as qs from "query-string"

import styles from './FormContact.module.css'

const { TextArea } = Input;

const FormContact = ({ form, location }) => {

    const domRef = React.createRef()
    const [feedbackMsg, setFeedbackMsg] = useState(null);

    const { getFieldDecorator } = form

    const handleSubmit = (event, other) => {
        event.preventDefault()

        let formData = {}
        form.validateFields((err, values) => {
            if (!err) {
              formData = values;
            }
        });
      
        const axiosOptions = {
          url: location.pathname,
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: qs.stringify(formData),
        }

        axios(axiosOptions)
          .then(response => {
            setFeedbackMsg("Form submitted successfully!")
            domRef.current.reset()
          })
          .catch(err =>
            setFeedbackMsg("Form could not be submitted.")
        )
    }

    return (
        <>
            {feedbackMsg && <p>{feedbackMsg}</p>}

            <form ref={domRef} name="contact" data-netlify="true" method="POST" className={styles.form} onSubmit={handleSubmit}>
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
        </>
    )

} 

const WrappedFormContact = Form.create({ name: 'contact' })(FormContact);
export default WrappedFormContact
