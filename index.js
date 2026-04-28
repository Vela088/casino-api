const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

// 🔥 esto sirve archivos HTML/CSS/JS
app.use(express.static('public'));

/* =========================
   🎲 API DE APUESTAS
========================= */

app.post('/bet', (req, res) => {
  const { user, amount } = req.body;

  if (!user || !amount) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  const win = Math.random() < 0.5;

  res.json({
    user,
    amount,
    result: win ? 'GANASTE 🎉' : 'PERDISTE 💀'
  });
});

/* =========================
   🚀 SERVIDOR
========================= */
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎰 Casino corriendo en puerto ${PORT}`);
});


