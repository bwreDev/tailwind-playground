require('dotenv').config();

export default function (req, res) {
	let nodemailer = require('nodemailer');
	const email = process.env.NODE_EMAIL;
	const password = process.env.NODE_EMAIL_PASSWORD;
	const contactEmail = process.env.CONTACT_EMAIL;

	const transporter = nodemailer.createTransport({
		port: 465,
		host: 'smtp.gmail.com',
		auth: {
			user: email,
			pass: password,
		},
		secure: true,
	});

	const mailData = {
		from: email,
		to: contactEmail,
		subject: req.body.subject,
		text: req.body.message + ' | Sent from: ' + req.body.email + req.body.phone,
		html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email} + '|' ${req.body.phone}`,
	};

	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});

	res.status(200);
}
