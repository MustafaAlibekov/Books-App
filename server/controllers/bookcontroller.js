const pool = require('../db');

const getBooks = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM "Books"');
        const books = response.rows;

        // Рендеринг шаблона books.ejs и передача данных
        //res.render('books', { books }); // Передаем массив книг в шаблон
        res.status(200).json(response.rows);
    } catch (err) {
        console.error(err.message);
    }
}
const createBook = async (req, res) => {}

const updateBook = async (req, res) => {}

const deleteBook = async (req, res) => {}
// Экспорт функций
module.exports = {
    getBooks,
  };