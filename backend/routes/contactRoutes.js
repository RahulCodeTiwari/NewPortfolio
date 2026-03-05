import express from "express";
import nodemailer from "nodemailer";
import { ContactMessage } from "../models/ContactMessage.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await ContactMessage.create({ name, email, subject, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

//     await transporter.sendMail({
//       from: `"Portfolio" <${process.env.MAIL_USER}>`,
//       to: process.env.RECEIVER_EMAIL,
//       subject: subject || "New Contact Message",
//       text: `
// Name: ${name}
// Email: ${email}
// Subject: ${subject}
// Message: ${message}
//       `,
//     });

const info = await transporter.sendMail({
  from: `"Portfolio" <${process.env.MAIL_USER}>`,
  to: process.env.RECEIVER_EMAIL,
  subject: subject || "New Contact Message",
  html: `
    <h2>New Contact Message</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Subject:</b> ${subject}</p>
    <p><b>Message:</b><br/> ${message}</p>
  `,
});

console.log("MAIL RESPONSE:", info);
    res.json({ success: true, msg: "Message sent successfully" });
    
  } catch (error) {
  console.error("MAIL ERROR FULL:", error);
  res.status(500).json({ message: error.message });
}
});

export default router;
