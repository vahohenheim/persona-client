import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from "axios"
import * as qs from "query-string"

import styles from './FormContact.module.css'

const { TextArea } = Input;

const FormContact = ({ form }) => {

    const domRef = React.createRef()
    const [feedbackMsg, setFeedbackMsg] = useState(null);

    const { getFieldDecorator } = form

    const handleSubmit = (event) => {
        // Do not submit form via HTTP, since we're doing that via XHR request.
        event.preventDefault()
        // Loop through this component's refs (the fields) and add them to the
        // formData object. What we're left with is an object of key-value pairs
        // that represent the form data we want to send to Netlify.
        const formData = {}
        Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))
      
        // Set options for axios. The URL we're submitting to
        // (this.props.location.pathname) is the current page.
        const axiosOptions = {
          url: this.props.location.pathname,
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: qs.stringify(formData),
        }
      
        // Submit to Netlify. Upon success, set the feedback message and clear all
        // the fields within the form. Upon failure, keep the fields as they are,
        // but set the feedback message to show the error state.
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

            <form ref={domRef} name="contact" data-netlify="true" form action="/" method="POST" className={styles.form} onSubmit={handleSubmit}>
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
