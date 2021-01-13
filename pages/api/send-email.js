const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
  sgMail.setApiKey(process.env.NEXT_SENDGRID_API_KEY);

  const { fName, lName, email, message } = req.body;

  const content = {
    to: 'serdar.savas84@gmail.com',
    from: email,
    subject: 'Mejl från Silvershield',
    text: message,
    html: `Från ${fName} ${lName}:</br> <p>${message}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully');
  } catch (err) {
    console.log('Error', err.response.body.errors);
    res.status(400).send('Message not sent');
  }
}
