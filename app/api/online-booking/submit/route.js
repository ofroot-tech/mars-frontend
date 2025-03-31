import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Step 1: Parse body safely
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      console.error('Failed to parse JSON body:', parseError);
      return new Response(JSON.stringify({ error: 'Invalid JSON input' }), { status: 400 });
    }

    // Step 2: Check required env vars
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing EMAIL_USER or EMAIL_PASSWORD in environment variables');
      return new Response(JSON.stringify({ error: 'Server misconfiguration' }), { status: 500 });
    }

    // Step 3: Validate required body fields (basic)
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phoneNumber', 'phoneType',
      'address', 'unit', 'city', 'state', 'zip', 'country',
      'dateOfRemoval', 'timeSlot', 'serviceType', 'itemsToRemove',
    ];

    const missingFields = requiredFields.filter((field) => !body[field]);
    if (missingFields.length > 0) {
      console.warn('Missing fields:', missingFields);
      return new Response(JSON.stringify({
        error: 'Missing required fields',
        missingFields,
      }), { status: 400 });
    }

    // Step 4: Create transporter
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    } catch (transportError) {
      console.error('Failed to create transporter:', transportError);
      return new Response(JSON.stringify({ error: 'Failed to configure email transport' }), {
        status: 500,
      });
    }

    // Step 5: Compose email
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

    // Step 6: Send email with error handling
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);

      return new Response(JSON.stringify({ message: 'Email sent!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (sendError) {
      console.error('sendMail failed:', sendError);
      return new Response(JSON.stringify({ error: 'Failed to send email', details: sendError.message }), {
        status: 500,
      });
    }

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(JSON.stringify({ error: 'Unexpected server error', details: error.message }), {
      status: 500,
    });
  }
}
