import { Resend } from 'resend';

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Parse JSON body
    const body = await req.json();

    // Validate required fields
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phoneNumber', 'phoneType',
      'address', 'unit', 'city', 'state', 'zip', 'country',
      'dateOfRemoval', 'timeSlot', 'serviceType', 'itemsToRemove',
    ];

    const missingFields = requiredFields.filter((field) => !body[field]);
    if (missingFields.length > 0) {
      return new Response(JSON.stringify({
        error: 'Missing required fields',
        missingFields,
      }), { status: 400 });
    }

    // Build email body
    const emailBody = `
      📦 New Booking Details

      Service Type: ${body.serviceType}
      Name: ${body.firstName} ${body.lastName}
      Email: ${body.email}
      Phone: ${body.phoneNumber} (${body.phoneType})
      Address: ${body.address} ${body.unit}, ${body.city}, ${body.state}, ${body.zip}, ${body.country}
      Date of Removal: ${body.dateOfRemoval}
      Time Slot: ${body.timeSlot}
      Items to Remove: ${body.itemsToRemove}
    `.trim();

    // Send the email using Resend
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: ['dimitri.mcdaniel@gmail.com'], // Add body.email if you want to CC the customer
      subject: `📦 New Booking from ${body.firstName} ${body.lastName}`,
      text: emailBody,
    });

    return new Response(JSON.stringify({ message: 'Email sent!', data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('Resend error:', err);
    return new Response(JSON.stringify({
      error: 'Failed to send email',
      details: err.message,
    }), { status: 500 });
  }
}
