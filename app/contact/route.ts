import { NextResponse } from "next/server";
import { sendContactFormEmail } from "../../lib/ses";

const TO_EMAIL = process.env.TO_EMAIL;

export async function POST(
  request: Request 
) {
  const req = await request.json();

  try {
    const data = await sendContactFormEmail(
      {
        name: req.name,
        email: req.email,
        message: req.message
      },
      TO_EMAIL!,
      process.env.FROM_EMAIL! // This should be a verified email address
    );
    
    return NextResponse.json({ 
      messageId: data.MessageId,
      success: true 
    }, { status: 201 });
  } catch (e: any) {
    console.log('SES Error:', e);
    return NextResponse.json(
      { error: e.message || 'An unexpected error occurred', success: false },
      { status: 500 }
    );
  }
}
