import nodemailer from "nodemailer";
import env from "./env";

export default 
nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS
    },
});
