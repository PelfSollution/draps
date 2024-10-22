'use server'

import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM as string,
    subject: `Nuevo mensaje de ${name}`,
    text: `
      Nombre: ${name}
      Email: ${email}
      Mensaje: ${message}
    `,
    html: `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
    `,
  }

  try {
    await sgMail.send(msg)
    return { success: true, message: 'Correo enviado con éxito' }
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    return { success: false, message: 'Error al enviar el correo' }
  }
}