import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, quality, speed, feedback, rating } = await request.json();

    if (!name || !email || !quality || !speed || !rating) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "saividesh29@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    const starIcons = "⭐".repeat(rating);

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || "saividesh29@gmail.com",
      to: "saividesh29@gmail.com",
      replyTo: email,
      subject: `New ${rating}-Star Client Review from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Rating: ${rating} Stars
        
1. How would you rate the work quality and value for money?
${quality}

2. How was the speed and support during the project?
${speed}

Additional Feedback:
${feedback || "None"}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px;">
          <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Client Review Received</h2>
          
          <div style="margin-bottom: 20px;">
            <p><strong>Client Name:</strong> ${name}</p>
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Overall Rating:</strong> <span style="color: #eab308; font-size: 18px;">${starIcons}</span> (${rating}/5)</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <p style="margin-top: 0; color: #555;"><strong>How would you rate the work quality and value for money?</strong></p>
            <p style="margin-bottom: 0;">${quality}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <p style="margin-top: 0; color: #555;"><strong>How was the speed and support during the project?</strong></p>
            <p style="margin-bottom: 0;">${speed}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px;">
            <p style="margin-top: 0; color: #555;"><strong>Any other words for us?</strong></p>
            <p style="margin-bottom: 0; white-space: pre-wrap;">${feedback || "<em>No additional feedback provided.</em>"}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Review sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending review email:", error);
    return NextResponse.json(
      { error: "Failed to send review email" },
      { status: 500 }
    );
  }
}
