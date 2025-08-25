import IndexSection from "./indexSection";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Image from "next/image";
import axios from "axios";

export default function ContactSection() {
  const [sendStatus, setSendStatus] = useState<"success"|"sending"|"err"|null>(null)

  const sendFail = (<div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc"><h2 id="dialog-title" className="text-lg">Message failed to send.</h2> <p id="dialog-desc" className="text-sm">Please <a href='mailto:fiokelly@gmail.com' className='text-blue-500'>send an email</a>.</p></div>)

  const sendSuccess = (<div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc"><h2 id="dialog-title" className="text-lg">Message recieved!</h2><p id="dialog-desc" className="text-sm">I will get back to you as soon as possible.</p></div>)

  const sendingMsg = (<div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc"><h2 id="dialog-title" className="text-lg">Message sending...</h2><p id="dialog-desc" className="text-sm">Please wait.</p></div>)

  return (
    <IndexSection title="Contact" classNames="bg-gradient-to-b from-zinc-100 to-zinc-100 via-zinc-50">
      <div data-testid="contact-form" className="flex flex-row w-full justify-between  h-[30rem]">
    <Formik    
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('name required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('email required'),
      message: Yup.string()
        .max(500, 'Must be 200 characters or less')
        .required('message required')
    })}
    onSubmit={async (values, actions ) => {

      setSendStatus("sending")
      await new Promise(resolve => setTimeout(resolve, 1000))
      axios.post("/contact", values)
      .then(() => {
        setSendStatus("success")
        actions.resetForm()
      })
      .catch((error) => {
        setSendStatus("err")
        const errorMessage =
          error.response.data.error || 'An unexpected error occurred.';
        actions.setStatus(errorMessage);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
      
        
      }}> 
      {(props) => (
      <Form className="font-sans flex flex-col lg:w-1/2  ">
          <div className=' mb-2 '>
          <p className='my-1'>For concert bookings, please contact <a target="_blank" href={"https://maslink.co.uk/client-directory?client=KELLF1&instrument=FLUTE1"} className="hover:text-blue-500 underline">The Musicians Answering Service</a>.</p>

          <p className='my-1'>For all other enquiries, complete the form below.</p>
          </div>
         <div className="flex flex-col my-1">
          <label htmlFor='name-input' className="form-label">Name</label>
          <Field 
            id="name-input" 
            className="text-black border border-black rounded-md w-full p-1"
            type="text"
            name="name"/>
            <div className="h-6">
          <ErrorMessage name="name">
            { msg => <div className="text-sm text-red-500 h-6">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
          <div className="flex flex-col my-1">
          <label htmlFor='email-input' className="form-label">Email</label>
          <Field
            id="email-input" 
            className="text-black border border-black rounded-md w-full p-1" 
            type="email"
            name="email"/>
            <div className="h-6">
          <ErrorMessage name="email" >
          { msg => <div className="text-sm text-red-500 h-6">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
          <div className="flex flex-col my-1 mb-0">
          <label htmlFor='msg-text' className="form-label">Message</label>
          <Field 
          multiline="6"
          maxLength="500"
          rows="4"
          component="textarea"
            id="msg-text" 
            className=" text-black border border-black rounded-md w-full p-1"
            type="textarea"
            name="message"/>
            <div className="h-6">
            {props.values.message.length > 0 && <p className='self-center text-sm mx-2 opacity-40'>{`${props.values.message.length}/500`}</p>}

          <ErrorMessage name="message">
            { msg => <div className="text-sm text-red-500">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
        <button disabled={props.isSubmitting || (sendStatus === "sending")} id="submit-button" type='submit' className="disabled:opacity-40 disabled:hover:cursor-default hover:bg-blue-50 border shadow-sm border-blue-500 text-blue-500 m-2 p-1 w-24 rounded self-end">Submit</button>
        <div>
        {sendStatus === "sending" 
        ? sendingMsg
        : sendStatus === "err" 
        ? sendFail
        : sendStatus === "success" 
        ? sendSuccess
        : null}
      </div> 
      </Form> )}
    </Formik>
    <div className="hidden lg:flex mx-12">
      <Image alt="Fiona Kelly" src={"/images/fiona-profile.jpg"} width="325" height="425" />
    </div>
    </div>
    </IndexSection>
  )
}