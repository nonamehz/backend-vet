const nodemailer = require('nodemailer');


const enviarEmailAceptado = async (datos) => {

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    //enviar email
    const { email, firstName, lastName } = datos.user;

    const info = await transporter.sendMail({
        from: 'MedicVet Delgado',
        to: email,
        subject: 'Solicitud de Adopción',
        text: 'Tu solicitud de adopción fue aceptado',
        html: `<p>Hola: ${firstName} ${lastName}</p>
        <p>Te informamos que la solicitud fue aceptada, puedes acercarte a la veterinaria.</p>
        `
    });

    console.log('Mensaje enviado', info.messageId);

}

const enviarEmailRechazado = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    //enviar email
    const { email, firstName, lastName } = datos.user;

    const info = await transporter.sendMail({
        from: 'MedicVet Delgado',
        to: email,
        subject: 'Solicitud de Adopción',
        text: 'Tu solicitud de adopción fue reachazada',
        html: `<p>Hola: ${firstName} ${lastName}</p>
                <p>Lamentamos informarte que tu solicitud fue rechazada</p>
        `
    });

    console.log('Mensaje enviado', info.messageId);
}


module.exports = {
    enviarEmailAceptado,
    enviarEmailRechazado
}