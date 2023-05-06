// получаем все пункты меню
const menuItems = document.querySelectorAll('nav ul li');

// добавляем обработчики событий для каждого пункта меню
menuItems.forEach(item => {
  // при наведении мыши на пункт меню добавляем класс "active"
  item.addEventListener('mouseover', () => {
    item.classList.add('active');
  });
  
  // при уходе мыши с пункта меню удаляем класс "active"
  item.addEventListener('mouseout', () => {
    item.classList.remove('active');
  });
});
