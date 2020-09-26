const nodemailer = require("nodemailer");
require('dotenv').config();

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_ACCT,
    pass: process.env.EMAIL_AUTH
  },
});

exports.contactResponse = (emailData) => {
  console.log('email data received at the emailer',emailData);
  transporter.sendMail({
    from: process.env.EMAIL_ACCT,
    to: emailData.contactemail + ", danny@march76.com",
    replyTo: 'danny@march76.com',
    subject: "Request for photos - " + emailData.contactphotoreq,
    html: "<style>\
    html, body, div,\
    h1, h2, h3, h4, h5, h6, p, a,\
    del, dfn, em, img,\
    dl, dt, dd, ol,\
    figure, figcaption, footer, header {\
        box-sizing: border-box;\
        margin: 0;\
        padding: 0;\
        border: 0;\
        font-size: 100%;\
        font: inherit;\
        vertical-align: baseline;\
    }\
    table {\
      border-spacing: 1rem;\
    }\
    th {\
      background: #333;\
      color: #fff;\
      text-align: left;\
      padding-right: 15px;\
    }\
    </style>\
    <div>\
    <h2>Hi, " + emailData.contactname + "</h2>\
     <p>Thank you for your interest in my photography services. I'll be in touch with you within the next 24 hours to discuss your project or address any general questions you might have</p>\
     <br>\
     <table>\
     <tr><th>Name</th><td>" + emailData.contactname + "</td></tr>\
     <tr><th>Email</th><td>" + emailData.contactemail + "</td></tr>\
     <tr><th>Phone</th><td>" + emailData.contactphone + "</td></tr>\
     <tr><th>Request</th><td>" + emailData.contactphotoreq + "</td></tr>\
     <tr><th>Business</th><td>" + emailData.contactbusname + "</td></tr>\
     <tr><th>Website</th><td>" + emailData.contactbussite + "</td></tr>\
     <tr><th>Message</th><td>" + emailData.contacttext + "</td></tr>\
     </table>\
     </div>"
  }, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    };
  });
}
