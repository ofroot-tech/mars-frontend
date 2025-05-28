import { Resend } from 'resend';

export async function POST(req) {
  console.log('trying to send the api to console');
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  
  try {
    console.log(resend);
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

    // Build inline HTML email template with banner
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 0; background: #ffffff; border: 1px solid #eee;">
        <img 
          src="https://mars-frontend-iecn6e02g-ofroot-techs-projects.vercel.app/images/mars.png" 
          alt="Mars Banner" 
          style="width: 100%; height: auto; border-bottom: 1px solid #ddd;"
        />
        <div style="padding: 20px;">
          <h2 style="color: #333;">📦 New Booking Received</h2>
          <p><strong>Service Type:</strong> ${body.serviceType}</p>
          <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phoneNumber} (${body.phoneType})</p>
          <p><strong>Address:</strong> ${body.address} ${body.unit}, ${body.city}, ${body.state}, ${body.zip}, ${body.country}</p>
          <p><strong>Date of Removal:</strong> ${body.dateOfRemoval}</p>
          <p><strong>Time Slot:</strong> ${body.timeSlot}</p>
          <p><strong>Items to Remove:</strong></p>
          <pre style="background: #f4f4f4; padding: 10px; border-radius: 4px;">${body.itemsToRemove}</pre>
          <hr style="margin: 30px 0;">
          <p style="font-size: 0.9em; color: #777;">This booking was received via your online form.</p>
        </div>
      </div>
    `;

    // Send the email using Resend
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: ['dimitri.mcdaniel@gmail.com'],
      subject: `📦 New Booking from ${body.firstName} ${body.lastName}`,
      html: emailHtml,
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
