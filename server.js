const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Rota para lidar com o envio do formulário
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Configurar Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Use o serviço do seu provedor de email
        auth: {
            user: 'seuemail@gmail.com',
            pass: 'suasenha',
        },
    });

    const mailOptions = {
        from: email,
        to: 'seuemail@gmail.com',
        subject: `Novo contato de ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao enviar a mensagem.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
