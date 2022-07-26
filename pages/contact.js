import { Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/contactForm";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <div className="contact-img">
        <Image alt="Fiona in red dress" src="/images/fiona-flute-table.jpg" width={3673/8} height={3673/8} />
      </div>
      <ContactForm />
    </Layout>
  )
}