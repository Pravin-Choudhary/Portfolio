"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: { username: string; email: string; msg: string }) {
  const { username, email, msg } = formData;

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend default for unverified domains
      to: 'pravin.devv@gmail.com',
      subject: `New Message from ${username} via Portfolio`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .container { background-color: #f9f9f9; padding: 30px; border-radius: 10px; border: 1px solid #e0e0e0; }
            .header { border-bottom: 2px solid #5046e6; padding-bottom: 15px; margin-bottom: 25px; }
            .header h1 { color: #5046e6; margin: 0; font-size: 24px; }
            .content { margin-bottom: 30px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
            .value { font-size: 16px; background-color: #fff; padding: 12px; border-radius: 6px; border: 1px solid #ddd; display: block; }
            .footer { font-size: 12px; color: #888; text-align: center; border-top: 1px solid #eee; pt-20px; margin-top: 30px; }
            .highlight { color: #5046e6; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Inquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Sender Name</span>
                <span class="value">${username}</span>
              </div>
              <div class="field">
                <span class="label">Sender Email</span>
                <span class="value">${email}</span>
              </div>
              <div class="field">
                <span class="label">Message</span>
                <div class="value" style="white-space: pre-wrap;">${msg}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your portfolio contact form.</p>
              <p>&copy; ${new Date().getFullYear()} Pravin Choudhary</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (data.error) {
      return { success: false, error: data.error.message };
    }

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || 'Unknown error occurred' };
  }
}
