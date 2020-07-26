const express = require('express');
const { check, validationResult } = require('express-validator/check');
const colors = require('colors/safe');
const router = express.Router();
const nodemailer = require('nodemailer');
router.post('/send', (req, res) => {
  if(req.body.firstName==""|| req.body.lastName==""){
   console.log("must not empty")
  }else{

    const output = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
    <html><body>
      <p>thanks for being a client for Mybosphorus</p>
      <h3>Your order summary</h3>
      <ul>  
        <li> first Name: ${req.body.firstName}</li>
        <li>last Name: ${req.body.lastName}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
        <li><a href="${req.body.linkk}"> download the invoice</a>
      </ul>
      </body></html>
      `;
      
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'mail.virtualentrepreneursassociation.org',
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'aaron.tardos@virtualentrepreneursassociation.org', // generated ethereal user
        pass: 'Qsdf12300'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Nodemailer Contact" <your@email.com>', // sender address
      to: 'hfaidhmoukim@gmail.com', // list of receivers
      subject: 'Node Contact Request', // Subject line
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  });
  }


  });


  module.exports = router;
