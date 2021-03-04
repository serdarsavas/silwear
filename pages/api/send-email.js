const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, message, tel } = req.body;

  const content = {
    to: 'info@silvershield.se',
    from: email,
    subject: `Silvershield - produktförfrågan`,
    text: message,
    html: `<h3>Namn: ${name}</h3>
           <h3>Email: ${email}</h3>
           <h3>Tel: ${tel}</h3><br>
           <p>Meddelande: ${message}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully');
  } catch (err) {
    console.log('Error', err.response.body.errors);
    res.status(400).send('Message not sent');
  }
}
