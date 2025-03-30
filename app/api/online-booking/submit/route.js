import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password (not regular password)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'dimitri.mcdaniel@gmail.com',
      subject: `📦 New Booking from ${body.firstName} ${body.lastName}`,
      text: `
        Service Type: ${body.serviceType}
        Name: ${body.firstName} ${body.lastName}
        Email: ${body.email}
        Phone: ${body.phoneNumber} (${body.phoneType})
        Address: ${body.address} ${body.unit}, ${body.city}, ${body.state}, ${body.zip}, ${body.country}
        Date of Removal: ${body.dateOfRemoval}
        Time Slot: ${body.timeSlot}
        Items: ${body.itemsToRemove}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), {
      status: 500,
    });
  }
}
