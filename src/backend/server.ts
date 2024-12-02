// Importa las librerías necesarias
import express, {Request, Response} from 'express';
import cors  from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
// Crea una instancia de Express
const app = express();
// Define el puerto en el que el servidor escuchará
const port = process.env.PORT || 5501; 
// Configurar el uso de CORS
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
// Middleware para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Ruta para servir los archivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));
// Ruta para manejar el envío del formulario
app.post('/send-email', async (req: Request, res: Response) => {
    // Extrae los datos del formulario del cuerpo de la solicitud
    const { nombre, email, telefono, consulta, contactoPref, fecha, hora, asesoria } = req.body;
    // Configura el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Reemplaza con tu correo electrónico
            pass: process.env.EMAIL_PASS
        }
    });

    // Configura el contenido del correo
    const mailOptions = {
        from: email,
        to: 'antonella.giaccometti@gmail.com', // Reemplaza con el correo del destinatario
        subject: 'Nueva consulta de contacto',
        text: `
            Nombre: ${nombre}
            Email: ${email}
            Teléfono: ${telefono}
            Consulta: ${consulta}
            Preferencia de contacto: ${contactoPref}
            Fecha: ${fecha}
            Hora: ${hora}
            Asesoría: ${asesoria}
        `
    };
    // Envía el correo
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado:', info.response);
        res.status(200).json({ message: 'Correo enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).send('Error al enviar el correo');
    }
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

