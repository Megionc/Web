// Получаем все заголовки и блоки текста
const Medias = document.querySelectorAll('.Media');
const texts = document.querySelectorAll('.text');

// Скрываем все блоки текста
texts.forEach(text => {
    text.style.display = 'none';
});

// Добавляем обработчик клика на каждый заголовок
Medias.forEach((Media, index) => {
    Media.addEventListener('click', () => {
    // Скрываем все блоки текста
    texts.forEach(text => {
        text.style.display = 'none';
    });

    // Показываем блок текста, соответствующий кликнутому заголовку
    texts[index].style.display = 'block';
  });
});
