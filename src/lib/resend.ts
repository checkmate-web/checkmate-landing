import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export interface EventInquiryData {
  companyName: string;
  email: string;
  number: string;
  message: string;
}

export const sendEventInquiry = async (data: EventInquiryData) => {
  try {
    // Send inquiry to Check Mate team
    const teamEmail = await resend.emails.send({
      from: 'Check Mate Events <noreply@checkmate.ae>',
      to: ['contact@checkmate.ae'],
      subject: `New Event Inquiry from ${data.companyName}`,
      html: `
        <h2>New Event Inquiry</h2>
        <p><strong>Company Name:</strong> ${data.companyName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone Number:</strong> ${data.number}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Event Inquiry
        
        Company Name: ${data.companyName}
        Email: ${data.email}
        Phone Number: ${data.number}
        
        Message:
        ${data.message}
      `,
    });

    // Send confirmation email to the customer
    const customerEmail = await resend.emails.send({
      from: 'Check Mate Events <noreply@checkmate.ae>',
      to: [data.email],
      subject: 'Thank You for Your Event Inquiry',
      html: `
        <p>Dear ${data.companyName},</p>
        
        <p>Thank you for reaching out and for your interest in working with us.</p>
        
        <p>We have successfully received your request, and our team is currently reviewing the details. One of our representatives will contact you shortly to discuss your requirements or request any additional information if needed.</p>
        
        <p>In the meantime, should you have any urgent questions or updates, please feel free to reach us via email at <a href="mailto:Contact@checkmate.ae">Contact@checkmate.ae</a> or by phone at <a href="tel:+971588904503">+971 58 890 4503</a>.</p>
        
        <p>We look forward to the opportunity to collaborate with you.</p>
        
        <p>Best regards,<br>
        Checkmate Team</p>
      `,
      text: `
        Dear ${data.companyName},

        Thank you for reaching out and for your interest in working with us.

        We have successfully received your request, and our team is currently reviewing the details. One of our representatives will contact you shortly to discuss your requirements or request any additional information if needed.

        In the meantime, should you have any urgent questions or updates, please feel free to reach us via email at Contact@checkmate.ae or by phone at +971 58 890 4503.

        We look forward to the opportunity to collaborate with you.

        Best regards,
        Checkmate Team
      `,
    });

    return { success: true, data: { teamEmail, customerEmail } };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
