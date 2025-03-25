// Ждем, пока DOM полностью загрузится, чтобы избежать ошибок при работе с элементами
document.addEventListener("DOMContentLoaded", () => {
    // Находим контейнер, куда будем добавлять карточки книг
    const bookGrid = document.getElementById("book-grid");
  
    // Функция для создания карточки книги
    function createBookCard(book) {
      // Создаем новый элемент <div> для карточки
      const card = document.createElement("div");
  
      // Добавляем класс "book-card" для стилизации карточки через CSS
      card.classList.add("book-card");
  
      // Заполняем карточку HTML-разметкой с данными о книге
      card.innerHTML = `
        <!-- Изображение обложки книги -->
        <img src="${book.BookImage}" alt="${book.BookTitle}">
  
        <!-- Блок с информацией о книге -->
        <div class="book-info">
          <!-- Название книги -->
          <h2>${book.BookTitle}</h2>
  
          <!-- Автор книги -->
          <p><strong>Автор:</strong> ${book.author}</p>
  
          <!-- Описание книги -->
          <p>${book.BookDesc}</p>
          <p><a><a href="${book.BookLink}">Читать</a></p>
        </div>
      `;
  
      // Возвращаем готовую карточку
      return card;
    }
  
    fetch('/api/books')
    .then(response => response.json()) // Преобразуем ответ в JSON
    .then(books => {
      // Создаем карточки для каждой книги
      books.forEach(book => {
        const card = createBookCard(book);
        bookGrid.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Ошибка при загрузке данных:', error);
    });
  });