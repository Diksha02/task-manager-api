const mailgun = require("mailgun-js");
const api_key = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({ apiKey: api_key, domain: DOMAIN });
// const data = {
//   from: "Diksha Nigam <dik.nig.rt18@rait.ac.in>",
//   to: "nigamdiksha02@gmail.com",
//   subject: "Hello there!",
//   text: "Hope this email actually finds you",
// };
// mg.messages().send(data, function (error, body) {
//   console.log(body);
// });

const sendWelcomeEmail = (email, name) => {
  mg.messages().send({
    from: "Diksha Nigam <nigamdiksha02@gmail.com>",
    to: email,
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancellationEmail = (email, name) => {
  mg.messages().send({
    from: "Diksha Nigam <nigamdiksha02@gmail.com>",
    to: email,
    subject: "Your account has been canceled. We're sorry to see you go.",
    text: `Hi, ${name}. This email confirms that your account has been canceled. We're really sorry to see you go. Please let me know if there is anything we can do to improve our service.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
