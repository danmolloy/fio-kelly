import styles from '../styles/Home.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [sendStatus, setSendStatus] = useState(null)

  const sendFail = (<div><h2 className="text-2xl">Message failed to send.</h2> <p>Please <a href='mailto:fiokelly@gmail.com' className='text-blue-500'>send an email</a>.</p></div>)

  const sendSuccess = (<div><h2 className="text-2xl">Message recieved!</h2><p>I will get back to you as soon as possible.</p></div>)

  const sendingMsg = (<div><h2 className="text-2xl">Message sending...</h2></div>)

  return (
    <Formik    
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Required')
    })}
    onSubmit={async (values, actions ) => {
      console.log('Sending')
      setSendStatus(sendingMsg)
      await new Promise(resolve => setTimeout(resolve, 1000))
        
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then((res) => {
        console.log('Response received')

        if (res.status === 200) {
          setSendStatus(sendSuccess)
          actions.setSubmitting(false)
          actions.resetForm()
        } else {
          setSendStatus(sendFail)
        }
        })
      }}> 

      <Form className="form">
      <h1 className="page-title self-start">Contact</h1> 
          <div className='contact-blurb'>
          <p className='my-1'>For concert bookings, please contact <Link href={"https://maslink.co.uk/"}><a className='link'>The Musicians Answering Service</a></Link>.</p>
          <p className='my-1'>For all other enquiries, complete the form below.</p>
          </div>

          <label htmlFor='name-input' className="form-label">Name</label>
          <Field 
            id="name-input" 
            className="form-input"
            type="text"
            name="name"/>
          <ErrorMessage name="name">
            { msg => <div className="form-error">{msg}</div> }
          </ErrorMessage>

          <label htmlFor='email-input' className="form-label">Email</label>
          <Field
            id="email" 
            className="form-input" 
            type="email"
            name="email"/>
          <ErrorMessage name="email">
          { msg => <div className="form-error">{msg}</div> }
          </ErrorMessage>

          <label htmlFor='msg-text' className="form-label">Message</label>
          <Field 
            id="msg-text" 
            className="text-input" 
            type="text"
            name="message"/>
          <ErrorMessage name="message">
            { msg => <div className="form-error">{msg}</div> }
          </ErrorMessage>
        <button id="submit-button" type='submit' className="submit-btn">Submit</button>
        <div>
        {sendStatus}
      </div>
      </Form> 
    </Formik>
  )
}