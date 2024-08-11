import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email, number, services } = await request.json()
    // console.log('process.env.SMTP_PASS', process.env.SMTP_PASS)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: 'hellotriptribe@gmail.com',
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: email,
      to: 'hellotriptribe@gmail.com', // your email to receive the form data
      subject: 'New Project Enquiry!',
      text: `Name: ${name}\nEmail: ${email}\nContact Number: ${number}\nServices: ${services.join(
        ', '
      )}`,
    }
    await transporter.sendMail(mailOptions)
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Something went wrong', error: error },
      { status: 500 }
    )
  }
}
