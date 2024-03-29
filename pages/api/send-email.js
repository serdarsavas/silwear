const sgMail = require('@sendgrid/mail')

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, message, phone } = req.body

  const content = {
    to: ['info@silvershield.se', 'serdar.savas84@gmail.com'],
    from: `${name} <${email}>`,
    subject: `Silvershield - produktförfrågan`,
    text: message,
    html: `<h3>Namn: ${name}</h3>
           <h3>Email: ${email}</h3>
           <h3>Tel: ${phone}</h3><br>
           <h4>Meddelande: ${message}</h4>`
  }

  try {
    console.log(content)
    await sgMail.sendMultiple(content)
    res.status(200).send('Message sent successfully')
  } catch (err) {
    console.log('Error', err.response.body.errors)
    res.status(400).send('Message not sent')
  }
}
