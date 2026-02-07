import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Use VITE_RESEND_API_KEY for local dev, RESEND_API_KEY for production
const resend = new Resend(process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { companyName, email, number, message } = req.body;

    // Validate required fields
    if (!companyName || !email || !number || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send inquiry to Check Mate team
    await resend.emails.send({
      from: 'Check Mate Events <noreply@checkmate.ae>',
      to: ['contact@checkmate.ae'],
      subject: `New Event Inquiry from ${companyName}`,
      html: `
        <h2>New Event Inquiry</h2>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${number}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to the customer
    await resend.emails.send({
      from: 'Check Mate Events <noreply@checkmate.ae>',
      to: [email],
      subject: 'Thank You for Your Event Inquiry',
      html: `
        <p>Dear ${companyName},</p>
        
        <p>Thank you for reaching out and for your interest in working with us.</p>
        
        <p>We have successfully received your request, and our team is currently reviewing the details. One of our representatives will contact you shortly to discuss your requirements or request any additional information if needed.</p>
        
        <p>In the meantime, should you have any urgent questions or updates, please feel free to reach us via email at <a href="mailto:Contact@checkmate.ae">Contact@checkmate.ae</a> or by phone at <a href="tel:+971588904503">+971 58 890 4503</a>.</p>
        
        <p>We look forward to the opportunity to collaborate with you.</p>
        
        <p>Best regards,<br>
        Checkmate Team</p>
      `,
    });

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
