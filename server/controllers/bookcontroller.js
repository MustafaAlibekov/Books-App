const pool = require('../db');

const getBooks = async (req, res) => {
    try {
        const response = await pool.query(`
            SELECT 
                bd.bookid, 
                bd.booktitle, 
                bd.bookdesc, 
                bd.booklink, 
                bd.bookimage, 
                a."AuthorName"
            FROM 
                public."bookdetails" bd
            JOIN 
                public."Authors" a 
            ON 
                bd."authorID" = a."AuthorId";
        `);
        const books = response.rows;

        // Рендеринг шаблона books.ejs и передача данных
        // res.render('books', { books }); // Передаем массив книг в шаблон
        res.status(200).json(books); // Отправляем данные в формате JSON
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
};
const createBook = async (req, res) => {
    try{
        const responce = await pool.query('')
    }
    catch
    {

    }
}

const updateBook = async (req, res) => {}

const deleteBook = async (req, res) => {}
// Экспорт функций
module.exports = {
    getBooks,
  };