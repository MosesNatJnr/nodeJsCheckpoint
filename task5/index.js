var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'emmasonnyerovwo@gmail.com',
    pass: 'jfvg qdhs lteb sscb'
  }
});

var mailOptions = {
  from: 'emmasonnyerovwo@gmail.com',
  to: 'vazkid02@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});