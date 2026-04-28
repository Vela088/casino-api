const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('🎰 Casino funcionando');
});

app.post('/bet', (req, res) => {
  const { user, amount } = req.body;

  const win = Math.random() < 0.5;

  res.json({
    user,
    amount,
    result: win ? 'GANASTE 🎉' : 'PERDISTE 💀'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log('Servidor activo');
});
