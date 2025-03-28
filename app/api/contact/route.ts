import FormData from '@/types/formData';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json();

    if (!data.name || !data.email || !data.message || !data.organization || !data.service) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      // port: 587,
      port: 465,
      secure: true, // true for port 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER_NO_REPLY,
        pass: process.env.GMAIL_PASS_NO_REPLY,
      },
    });



    await transporter.sendMail({
      from: process.env.GMAIL_USER_NO_REPLY,
      to: process.env.GMAIL_USER,
      subject: "New message from contact form on bardiamadani.com",
      text: `
      New message from ${data.name} (${data.email})
      
      Organization: ${data.organization}
      Service: ${data.service}
      
      Message:
      ${data.message}
        `,
      replyTo: data.email,
    });

    return NextResponse.json({ success: true, message: 'Message received!' });
  } catch (error: unknown) {
    return NextResponse.json({ mesage: "Something went wrong...", error: error }, { status: 500 });
  }
}
