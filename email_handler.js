const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
// Middleware to parse JSON data
app.use(express.json());

// Endpoint to handle email sending
app.post('/send-email', async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: 'vermashubham1602@outlook.com',
                pass: 'Shubhreet162@outlook',
            },
        });

        const mailOptions = {
            from: 'vermashubham1602@outlook.com',
            // to: 'vermashubham1602@gmail.com',
            to: req.body.to,
            subject: 'Subject of the email',
            // text: 'Body of the email',
            text: req.body.data,
        };

        console.log(mailOptions.text,"::", mailOptions.to);

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
