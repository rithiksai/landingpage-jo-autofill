const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Setup middlewares
app.use(cors());
app.use(bodyParser.json());

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// POST route to send confirmation email
app.post('/send-confirmation', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await resend.emails.send({
      from: 'ApplyPilot <no-reply@applypilot.com>',
      to: email,
      subject: 'You’re on the ApplyPilot waitlist 🎉',
      html: `<p>Thanks for joining the waitlist! We'll notify you when we’re ready for liftoff 🚀</p>`,
    });

    console.log("Sending email to : ", email);

    res.json({ success: true });
  } catch (err) {
    console.error('Email sending error:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
