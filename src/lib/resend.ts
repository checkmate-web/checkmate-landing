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
    const response = await resend.emails.send({
      from: 'Check Mate Events <onboarding@resend.dev>', // Update this with your verified domain
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

    return { success: true, data: response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
