const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASS } = require("../config/dotenv");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

const sendEmail = async ({ to, subject, html }) => {
  const mailOptions = {
    from: `"RentalBloom" <${EMAIL_USER}>`,
    to,
    subject,
    html
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
