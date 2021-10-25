import nodemailer from 'nodemailer';

export default function sendEmail(req, res) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASS_EMAIL
    }
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: `"Contact Form 👻" <${process.env.USER_EMAIL}>`, // sender address
    to: process.env.USER_EMAIL, // list of receivers
    replyTo: req.body.email,
    subject: "CONTACT THROUGH THE WEBSITE FORM ✔", // Subject line
    text: req.body.message, // plain text body
    html: `<b>${req.body.name}</b><br />${req.body.message}`, // html body
  })
  .then((response) => {res.send(response)})
  .catch((error) => {res.send(error)});
}