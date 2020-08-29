// 1. Получение размера рабочей области. +
// 2. Написать функцию генерирующую рандомные координаты(X,Y). +
// 3. Написать анимацию появление падающих элементов.
// 4. Написать счетчик элементов (<=10).
// 5. Написать функцию подсчета кол-во набранных баллов.

let getWidth      = document.body.clientWidth,
getHeight     = window.innerHeight,
windowWidth   = document.getElementById('js-width').textContent = `Width: ${getWidth}`,
windowHeight  = document.getElementById('js-height').textContent = `Heigth: ${getHeight}`,
elements      = document.querySelectorAll('.box');

// windowWidth.textContent = `Width: ${getWidth}`;
// windowHeight.textContent = `Heigth: ${getHeight}`;

let randomY = 0;
let randomX = 0;

// Получение случайного целого числа в заданном интервале для значении X, Y
  function getRandomCoordinates(minY, maxY, minX, maxX) {
    minY = Math.ceil(minY);
    maxY = Math.floor(maxY);
    minX = Math.ceil(minX);
    maxX = Math.floor(maxX);
    
    let locRandomY = Math.floor(Math.random() * (maxY - minY)) + minY;
    let locRandomX = Math.floor(Math.random() * (maxX - minX)) + minX;
    
    // console.log(`randomY: ${locRandomY}`);
    // console.log(`randomX: ${locRandomX}`);

    randomY = locRandomY;
    randomX = locRandomX;
    return;
  }

  let totalInput = document.getElementById('total-input');
  let counter = 0;
  let totalCounter = 0;

  // Задаем каждому элементу случайное позиционирование
  elements.forEach(function (item) {
    getRandomCoordinates(0, getHeight, 0, getWidth, elements);
    item.style.cssText = `top: ${randomY}px; left: ${randomX}px`;
    item.textContent = item.getAttribute('data-score');
    item.addEventListener('click', clickCounter);
  })
  
  // Клик по элементам и вывод набранных баллов
  function clickCounter() {
    // console.log(this);
    totalCounter = +this.getAttribute('data-score')
    // console.log(totalCounter);
    counter += totalCounter;
    totalInput.value = counter;

    if (totalInput.value > 150) {
      alert('Congratulations!')
    }
  }
