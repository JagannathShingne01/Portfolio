

export default async function handler(req, res){
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      // // secure: false,
      // host: "smtp.office365.com",
      // port: 587,
      // // tls: {
      // //   ciphers: "SSLv3",
      // //   rejectUnauthorized: false,
      // // },
      // secureConnection: false,
      // tls: { ciphers: "SSLv3" },
  
      // gmail
      port: 465,
      host: "smtp.gmail.com",
      secure: true,
  
      auth: {
        user: process.env.MAIL_USER,
        pass:  process.env.MAIL_PASS,
      },
    
    });
    transporter.on("debug", (info) => {
      console.log(info);
    });
    // Configuring Mail Data
    const mailData = {
      from: process.env.MAIL_USER,
      // to: process.env.MAIL_USER,
      to: "astinm507@gmail.com",
      subject: `Inquiry from ${req.body.name}`,
      html: `<p>Hello,</p>
      <p>${req.body.name} has contacted.</p>
      <p>Reason for Contact: ${req.body.service}</p>
      <p>Message: ${req.body.message}</p>
  
      <p>The contact details for the inquiry are as follows:</p>
      <p>Contact Number: ${req.body.phone} </p>
      <p>Contact Email: ${req.body.email} </p>
  
      <p> Regards, </p>
      <p> Jagannath Shingne </p>
      `,
    };
  
    // Sending the email, followed by status code.
  
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          reject(err);
          res.status(500).json({
            success: "false", 
            error: err,
          });
        } else {
          resolve(info);
          res.status(200).json({
            success: "true",
            info,
            error: err,
          });
        }
      });
    });
}