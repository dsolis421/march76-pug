const nodemailer = require("nodemailer");
require('dotenv').config();

var transporter = nodemailer.createTransport({
  host: 'smtp.outlook.com',
  port: 587,
  auth: {
    user: process.env.EMAIL_ACCT,
    pass: process.env.EMAIL_AUTH
  },
});

exports.contactResponse = async (emailData) => {
  console.log('email data received at the emailer',emailData);
  await transporter.sendMail({
    from: process.env.EMAIL_ACCT,
    to: emailData.contactemail + ", danny@march76.com",
    replyTo: 'danny@march76.com',
    subject: "Request for photos - " + emailData.contactphotoreq,
    html: "\
    <html>\
      <head>\
          <style>\
            html, body, div,\
            h1, h2, h3, h4, h5, h6, p, a, span,\
            del, dfn, em, img,\
            dl, dt, dd, ol,\
            figure, figcaption, footer, header,\
            table, th, tr, td {\
                box-sizing: border-box;\
                margin: 0;\
                padding: 0;\
                border: 0;\
                font-size: 100%;\
                font: inherit;\
                vertical-align: baseline;\
            }\
            body {\
              color: #333;\
              font-size: 14px;\
            }\
            h2 {\
              font-size: 18px;\
              font-weight: bold;\
            }\
            table {\
              border-spacing: 2px;\
            }\
            th {\
              background: #333;\
              color: #fff;\
              text-align: left;\
            }\
            th, td {\
              padding: 0 10px;\
            }\
            .m76signature {\
              color: #333;\
              display: block;\
              font-size: 18px;\
            }\
          </style>\
      </head>\
      <body>\
        <div>\
          <br>\
          <h2>Hi, " + emailData.contactname + "</h2>\
          <p>Thank you for your interest in my photography services. I'll be in touch with you within the next 24 to 48 hours to discuss your project or address any general questions you might have.</p>\
          <br>\
          <h3>Your Message</h3>\
          <table>\
            <tr><th>Name</th><td>" + emailData.contactname + "</td></tr>\
            <tr><th>Email</th><td>" + emailData.contactemail + "</td></tr>\
            <tr><th>Phone</th><td>" + emailData.contactphone + "</td></tr>\
            <tr><th>Request</th><td>" + emailData.contactphotoreq + "</td></tr>\
            <tr><th>Business</th><td>" + emailData.contactbusname + "</td></tr>\
            <tr><th>Website</th><td>" + emailData.contactbussite + "</td></tr>\
            <tr><th>Message</th><td>" + emailData.contacttext + "</td></tr>\
          </table>\
          <br>\
          <br>\
          <p>Sincerely,</p>\
          <span class='m76signature'>Danny Solis</span>\
          <span class='m76signature'>Photographer</span>\
          <span class='m76signature'>danny@march76.com</span>\
          </div>\
      </body>\
    </html>"
  });
}
