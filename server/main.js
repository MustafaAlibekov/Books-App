const express = require('express');
const pool = require('./db');
const app = express();
const path = require('path');
// Middleware для парсинга JSON
app.use(express.json());

// Подключение маршрутов
const bookRoutes = require('./routes/bookroutes');
app.use('/api', bookRoutes);

// Обслуживание статических файлов
app.use(express.static(path.join(__dirname, 'public/resources')));


// Маршрут для главной страницы
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '/views/index.html');
  res.sendFile(filePath);
});

app.get('/1/', (req, res) => {
  const filePath = path.join(__dirname, '/views/index2.html');
  res.sendFile(filePath);
});
// Проверка подключения к базе данных
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the database:', res.rows);
  }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});