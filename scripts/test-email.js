import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dimitri.mcdaniel@gmail.com',
    pass: 'usunrwktpydbsetp', // <- No spaces here, just your app password
  },
});

const mailOptions = {
  from: 'dimitri.mcdaniel@gmail.com',
  to: 'dimitri.mcdaniel@gmail.com',
  subject: 'Test Email from Node',
  text: 'If you see this, it worked.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('❌ Error:', error.message);
  } else {
    console.log('✅ Email sent:', info.response);
  }
});
