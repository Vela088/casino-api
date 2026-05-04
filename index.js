const express = require('express');
const app = express();

app.use(express.json());

<<<<<<< HEAD
// 👇 AÑADE ESTA LÍNEA — sirve todos tus archivos del casino
app.use(express.static('public'));

app.post('/bet', (req, res) => {
  const { user, amount } = req.body;
=======
app.get('/', (req, res) => {
  res.send('🎰 Casino funcionando');
});

app.post('/bet', (req, res) => {
  const { user, amount } = req.body;

>>>>>>> 2a40db7f0cc597670bcd5e24280af601599a516c
  const win = Math.random() < 0.5;
  res.json({
    user,
    amount,
    result: win ? 'GANASTE 🎉' : 'PERDISTE 💀'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
<<<<<<< HEAD
  console.log(`Servidor activo en puerto ${PORT}`);
});
=======
  console.log('Servidor activo');
});
>>>>>>> 2a40db7f0cc597670bcd5e24280af601599a516c
