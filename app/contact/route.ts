import { NextResponse } from "next/server";

const sgMail = require('@sendgrid/mail');

const TO_EMAIL = process.env.TO_EMAIL


export async function POST(
  request: Request 
) {
  const req = await request.json();
  console.log(req)


  const emailData = {
    from: process.env.FROM_EMAIL,
    personalizations: [
      {
        to: TO_EMAIL,
        dynamic_template_data: {
          toName: "Fiona",
          name: req.name, 
          email: req.email, 
          message: req.message
        },
      },
    ],
    template_id: "d-b9231cb1c21e4462af1d2da00dcb6827",
  };
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    const data = await sgMail.send(emailData);
    return NextResponse.json({ ...data, success: true }, { status: 201 });
  } catch (e: any) {
    console.log(e)
    return NextResponse.json(
      { error: e.message || 'An unexpected error occurred', success: false },
      { status: 500 }
    );
  }
}
