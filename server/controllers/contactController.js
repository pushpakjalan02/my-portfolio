const Resend = require('resend');

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SEND_FROM_EMAIL = process.env.SEND_FROM_EMAIL;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

const resend = new Resend.Resend(RESEND_API_KEY);

exports.sendEmail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const htmlTagRegex = /<[^>]*>/;
        const result = htmlTagRegex.test(message);

        if (result) {
            return res.status(400).json({ error: 'Malicious intent detected.' });
        }

        const formattedMessage = message.replace(/(\r\n|\r|\n)/g, "<br>").replace(/ /g, "&nbsp;");

        resend.emails.send({
            from: SEND_FROM_EMAIL,
            to: CONTACT_EMAIL,
            subject: `Message from ${name} <${email}>: ${subject}`,
            html: formattedMessage
        });

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
};
