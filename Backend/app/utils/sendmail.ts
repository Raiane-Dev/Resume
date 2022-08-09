import mailer from "../config/mailer";
import env from "../config/env";

async function sendmail(
    user_mail: string, subject_message: string, text_message: string
) {
    mailer.sendMail(
        {
            from: env.SMTP_USER,
            to: user_mail,
            subject: subject_message,
            text: text_message
        }, (err: any, info: any) => {
        if(err) {
            console.log(err);
            throw err
        };
    });
}

export default sendmail;