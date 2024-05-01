const PASSWORD = process.env.PASSWORD
const FROM_EMAIL = process.env.FROM_EMAIL
const TO_EMAIL = process.env.TO_EMAIL

export async function POST(request: Request) {

  const req = await request.json()
  let nodemailer = require('nodemailer')  

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
      user: FROM_EMAIL,
      pass: PASSWORD,
    },
  });
  console.log(req.body)


const mailData = {
  from: FROM_EMAIL,
  to: TO_EMAIL,
  subject: `Message from ${req.name}`,
  text: `${req.message} | Sent from ${req.email}`,
  html: `<div>${req.message}</div><p>Sent from: ${req.email}</p>`
}

await new Promise((resolve, reject) => {

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err)
      reject(err)
    } else {
      console.log(info)
      resolve(info)
    }
  })

})

return new Response("Success!", {status: 200})

}