import { NextRequest, NextResponse } from "next/server";
// import nodemailer from 'nodemailer';
// import Mail from "nodemailer/lib/mailer";
import sgMail from "@sendgrid/mail";

export async function POST(req: NextRequest){
    const { name, email, message } = await req.json();
    
    try {
        sgMail.setApiKey(process.env.SG_API_KEY!);
        const msg = {
            to: email, 
            from: name, 
            subject: 'DevBlog Contact Form',
            text: `Hello! My name is ${name} and I want to discuss a potential project.\nYou can email me at ${email}.\nHere are some details about my project: ${message}` 
        }

        sgMail.send(msg);
        console.log(msg)

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        )
    } catch (error) {
        console.error("Error sending email:", error)
        return NextResponse.json(
            { message: "Failed to send email"},
            { status: 500 }
        )
    }


    // const transport = nodemailer.createTransport({
    //     service: 'gmail',
    //     host: 'smtp.gmail.com',
    //     port: 587,
    //     secure: false, 
    //     auth: {
    //         user: process.env.MY_TIPGMAIL,
    //         pass: process.env.GMAIL_PASSWORD
    //     }
    // })

    // const mailOptions: Mail.Options = {
    //     from: email,
    //     to: process.env.MY_TIPGMAIL,
    //     subject: `Message from ${name}`,
    //     text: `Hello! My name is ${name} and I want to discuss a potential project.\nYou can email me at ${email}.\nHere are some details about my project: ${message}`
    // }




    // console.log(mailOptions)

    // const sendMailPromise = () => {
    //     new Promise<string>((resolve, reject) => {
    //         transport.sendMail(mailOptions, (err) => {
    //             if(!err){
    //                 resolve('Email Sent!');
    //             }else{
    //                 reject(err.message)
    //             }
    //         })
    //     })
    // }

    // try {
    //     await sendMailPromise();
    //     return NextResponse.json({ message: 'Email Sent!'});
    // } catch (error) {
    //     console.error(error);
    //     return NextResponse.json({ error: error}, { status: 500 })
    // }
}