import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export async function POST(req: NextRequest){
    const { name, email, message } = await req.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, 
        auth: {
            user: process.env.MY_TIPGMAIL,
            pass: process.env.GMAIL_PASSWORD
        }
    })

    const mailOptions: Mail.Options = {
        from: email,
        to: process.env.MY_TIPGMAIL,
        subject: `Message from ${name}`,
        text: `Hello! My name is ${name} and I want to discuss a potential project.\nYou can email me at ${email}.\nHere are some details about my project: ${message}`
    }

    console.log(mailOptions)


    try {
        await transport.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email Sent!'});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error}, { status: 500 })
    }
}