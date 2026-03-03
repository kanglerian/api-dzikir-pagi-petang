const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const database = require('./dzikr.json');


app.use(cors());

app.get('/', async (req, res) => {
  return res.json({
    message: "Welcome to API Dzikir Pagi Petang",
    status: "Active",
    endpoints: {
      pagi: {
        path: "/pagi",
        description: "Mendapatkan semua daftar dzikir waktu pagi",
        method: "GET"
      },
      petang: {
        path: "/petang",
        description: "Mendapatkan semua daftar dzikir waktu sore/petang",
        method: "GET"
      },
    },
    source: "Hisnul Muslim"
  });
});

app.get('/pagi', async (req, res) => {
  const pagi = database.pagi;
  if (!pagi) {
    return res.status(404).json({ message: "Dzikir pagi not found" });
  }
  return res.status(200).json({
    message: "Dzikir pagi found",
    data: pagi
  });
});

app.get('/petang', async (req, res) => {
  const petang = database.petang;
  if (!petang) {
    return res.status(404).json({ message: "Dzikir petang not found" });
  }
  return res.status(200).json({
    message: "Dzikir petang found",
    data: petang
  });
});


app.listen(port, () => console.log(`Apps run on http://localhost:${port}`));

module.express = app;