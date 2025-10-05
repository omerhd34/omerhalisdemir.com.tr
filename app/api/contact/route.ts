import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Yeni İletişim Formu: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="tr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              background-color: #f5f5f5; 
              padding: 20px;
              line-height: 1.6;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background-color: #ffffff; 
              border-radius: 12px; 
              overflow: hidden; 
              box-shadow: 0 4px 6px rgba(0,0,0,0.1); 
            }
            .header { 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
              color: white; 
              padding: 40px 30px; 
              text-align: center; 
            }
            .header h1 { 
              margin: 0; 
              font-size: 28px; 
              font-weight: 600; 
              text-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .content { 
              padding: 40px 30px; 
            }
            .field { 
              margin-bottom: 25px; 
              padding-bottom: 25px; 
              border-bottom: 2px solid #f0f0f0; 
            }
            .field:last-child { 
              border-bottom: none; 
              margin-bottom: 0;
              padding-bottom: 0;
            }
            .label { 
              font-size: 11px; 
              text-transform: uppercase; 
              color: #6b7280; 
              font-weight: 700; 
              letter-spacing: 1px; 
              margin-bottom: 8px; 
              display: block;
            }
            .value { 
              font-size: 16px; 
              color: #1f2937; 
              line-height: 1.8;
              word-wrap: break-word;
            }
            .value a {
              color: #667eea;
              text-decoration: none;
              font-weight: 500;
            }
            .value a:hover {
              text-decoration: underline;
            }
            .message-box { 
              background-color: #f9fafb; 
              padding: 25px; 
              border-radius: 8px; 
              border-left: 4px solid #667eea; 
              margin-top: 12px;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer { 
              background-color: #f9fafb; 
              padding: 25px 30px; 
              text-align: center; 
              color: #6b7280; 
              font-size: 13px; 
              border-top: 2px solid #e5e7eb;
            }
            .footer strong {
              color: #667eea;
              font-weight: 600;
            }
            .divider {
              height: 1px; 
              background: #e5e7eb; 
              margin: 15px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Yeni İletişim Formu Mesajı</h1>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">İSİM & SOYİSİM</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">E-POSTA ADRESİ</div>
                <div class="value">
                  <a href="mailto:${email}">${email}</a>
                </div>
              </div>
              
              ${
                phone
                  ? `
              <div class="field">
                <div class="label">TELEFON</div>
                <div class="value">${phone}</div>
              </div>
              `
                  : ""
              }
              
              <div class="field">
                <div class="label">KONU</div>
                <div class="value">${subject}</div>
              </div>
              
              <div class="field">
                <div class="label">MESAJ</div>
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>Bu mesaj <strong>omerhalisdemir.com.tr</strong> web sitesi iletişim formundan gönderilmiştir.</p>
              <div class="divider"></div>
              <p style="margin-top: 12px; color: #9ca3af; font-size: 12px;">
                ${new Date().toLocaleString("tr-TR", {
                  dateStyle: "full",
                  timeStyle: "short",
                  timeZone: "Europe/Istanbul",
                })}
              </p>
              <p style="margin-top: 8px; font-size: 11px; color: #9ca3af;">
                Bu mesaja doğrudan cevap verebilirsiniz
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Yeni İletişim Formu Mesajı

İsim & Soyisim: ${name}
E-posta: ${email}
Telefon: ${phone || "Belirtilmemiş"}
Konu: ${subject}

Mesaj:
${message}

---
Bu mesaj omerhalisdemir.com.tr web sitesi iletişim formundan gönderilmiştir.
Tarih: ${new Date().toLocaleString("tr-TR")}
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Email başarıyla gönderildi!",
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Email gönderilirken bir hata oluştu.",
        error: error instanceof Error ? error.message : "Bilinmeyen hata",
      },
      { status: 500 }
    );
  }
}
