import {
  SESClient,
  SendEmailCommand,
  SendEmailCommandInput,
} from "@aws-sdk/client-ses";

// Create SES client
export const sesClient = new SESClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactFormEmail(
  emailData: EmailData,
  toEmail: string,
  fromEmail: string,
) {
  const emailParams: SendEmailCommandInput = {
    Source: fromEmail,
    ReplyToAddresses: [emailData.email], // Add reply-to so you can reply directly to the contact form email
    Destination: {
      ToAddresses: [toEmail],
    },
    Message: {
      Subject: {
        Data: `Website Message from ${emailData.name}`,
        Charset: "UTF-8",
      },
      Body: {
        Html: {
          Data: `
            <h2>Website Contact Form Submission</h2>
            <p>You have a new message via your website (https://www.fionakellyflute.com/).</p>
            <p><strong>Name:</strong> ${emailData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${emailData.email}">${emailData.email}</a></p>
            <p><strong>Message:</strong></p>
            <p>${emailData.message.replace(/\n/g, "<br>")}</p>
          `,
          Charset: "UTF-8",
        },
        Text: {
          Data: `
New Contact Form Submission

Name: ${emailData.name}
Email: ${emailData.email}
Message: ${emailData.message}
          `,
          Charset: "UTF-8",
        },
      },
    },
  };

  const command = new SendEmailCommand(emailParams);
  return await sesClient.send(command);
}
