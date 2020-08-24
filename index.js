// 1. Получение размера рабочей области.
// 2. Написать функцию генерирующую рандомные координаты(X,Y).
// 3. Написать анимацию появление падающих элементов.
// 4. Написать счетчик элементов (<=10).
// 5. Написать функцию подсчета кол-во набранных баллов.

let getWidth      = document.body.clientWidth,
getHeight     = window.innerHeight,
windowWidth   = document.getElementById('js-width'),
windowHeight  = document.getElementById('js-height'),
element       = document.getElementById('element'),
elements      = document.querySelectorAll('.box');

windowWidth.textContent = `Width: ${getWidth}`;
windowHeight.textContent = `Heigth: ${getHeight}`;

// Получение случайного целого числа в заданном интервале для значении X,Y
function getRandomCoordinates(minY ,maxY, minX, maxX) {
  minY = Math.ceil(minY);
  maxY = Math.floor(maxY);
  minX = Math.ceil(minX);
  maxX = Math.floor(maxX);
  
  const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;
  const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
  
  // elements.setAttribute('style', `top: ${randomY}px; left: ${randomX}px`)
  element.style.cssText = `top: ${randomY}px; left: ${randomX}px`;
  
}
getRandomCoordinates(0, getHeight, 0, getWidth)


elements.forEach(function(item, index) {
  console.log(`item: ${item} --- index: ${index}`);
})
