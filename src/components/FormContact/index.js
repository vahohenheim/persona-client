import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { Messages } from 'components'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from "axios"
import * as qs from "query-string"

import styles from './FormContact.module.css'

const { TextArea } = Input;

const FormContact = ({ form, location }) => {

    const domRef = React.createRef()
    const recaptchaRef = React.createRef()
    const [feedbackMsg, setFeedbackMsg] = useState(null);

    const { getFieldDecorator } = form

    const handleSubmit = (event, other) => {
        event.preventDefault()

        let formData = {}
        form.validateFields((err, values) => {
            if (!err) {
                formData = values;

                console.log(location.pathname)

                const axiosOptions = {
                    url: location.pathname,
                    method: "post",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    data: qs.stringify(formData),
                }
        
                axios(axiosOptions)
                    .then(response => {
                        setFeedbackMsg(<Messages type="sucess"/>)
                        domRef.current.reset()
                    })
                    .catch(err =>
                        setFeedbackMsg(<Messages type="error"/>)
                    )
            }
        });
      
        
    }

    return (
        <>
            {feedbackMsg && <p>{feedbackMsg}</p>}

            <form ref={domRef} name="contact" data-netlify="true" data-netlify-recaptcha="true" method="POST" className={styles.form} onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
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
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LfW0hwTAAAAAFyvJMIjAfoE8B-FjwAyp4W9nnTT"
                        className={styles.recaptcha}
                        size="compact"
                    />
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
