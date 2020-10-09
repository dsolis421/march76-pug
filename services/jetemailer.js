/*now using jetmailer API
https://dev.mailjet.com/email/guides/
*/
const mailjet = require ('node-mailjet');
require('dotenv').config();

var jetemailersend = (reqEmailData) => {
  mailjet.connect(process.env.JETKEYPUBLIC, process.env.JETKEYPRIVATE)
  .post("send", {'version': 'v3.1'})
  .request({
    "Messages":[
      {
        "From": {
          "Email": process.env.EMAIL_ACCT,
          "Name": "Danny Solis"
        },
        "To": [
          {
            "Email": reqEmailData.contactemail,
            "Name": reqEmailData.contactemail
          }
        ],
        "Cc" : [
          {
            "Email": process.env.EMAIL_ACCT,
            "Name": "Danny Solis"
          }
        ],
        "Subject": "Request for photos - " + reqEmailData.contactphotoreq,
        "HTMLPart": "\
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
              <h2>Hi, " + reqEmailData.contactname + "</h2>\
              <p>Thank you for your interest in my photography services. I'll be in touch with you within the next 24 to 48 hours to discuss your project or address any general questions you might have.</p>\
              <br>\
              <h3>Your Message</h3>\
              <table>\
                <tr><th>Name</th><td>" + reqEmailData.contactname + "</td></tr>\
                <tr><th>Email</th><td>" + reqEmailData.contactemail + "</td></tr>\
                <tr><th>Phone</th><td>" + reqEmailData.contactphone + "</td></tr>\
                <tr><th>Request</th><td>" + reqEmailData.contactphotoreq + "</td></tr>\
                <tr><th>Business</th><td>" + reqEmailData.contactbusname + "</td></tr>\
                <tr><th>Website</th><td>" + reqEmailData.contactbussite + "</td></tr>\
                <tr><th>Message</th><td>" + reqEmailData.contacttext + "</td></tr>\
              </table>\
              <br>\
              <br>\
              <p>Sincerely,</p>\
              <span class='m76signature'>Danny Solis</span>\
              <span class='m76signature'>Photographer</span>\
              <span class='m76signature'>danny@march76.com</span>\
              </div>\
          </body>\
        </html>",
        "CustomID": "AppGettingStartedTest"
      }
    ]
  })
  .then((result) => {
    console.log("Email Request was sent: " + result.body.Messages);
    //return res.status(202).send({error: false});
  })
  .catch((err) => {
    console.log("Email Request errored: " + err.statusCode);
    //return res.status(500).send({error: true});
  });
}

exports.jetEmailResponse = async (emailData) => {
  console.log('made it to jetEmailResponse in jetmailer')
  await jetemailersend(emailData);
}
