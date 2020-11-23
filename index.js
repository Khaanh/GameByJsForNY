// 1. Получение размера рабочей области. +
// 2. Написать функцию генерирующую рандомные координаты(X,Y). +
// 3. Написать анимацию появление падающих элементов.
// 4. Написать счетчик элементов (<=10).
// 5. Написать функцию подсчета кол-во набранных баллов.

let getWidth      = document.body.clientWidth, // Получаем ширину ус-ва с учетом бокового скролла
getHeight     = window.innerHeight, //Получаем высоту ус-ва
windowWidth   = document.getElementById('js-width').textContent = `Width: ${getWidth}`,
windowHeight  = document.getElementById('js-height').textContent = `Heigth: ${getHeight}`,
elements      = document.querySelectorAll('.boxTest'); //Игровые элементы

/**
* ф-я getRandomCoordinates(minY, maxY, minX, maxX) - генерирует случайные числа для координат х, у и записывает в переменные randomY, randomX
* @param {minY, maxY, minX, maxX} number высота/ширина от 0 до макс. высоты/ширины ус-ва
* @returns {number} координаты для x, y  
* 
*/

let randomY = 0,
randomX = 0;

function getRandomCoordinates(minY, maxY, minX, maxX) {
  minY = Math.ceil(minY);
  maxY = Math.floor(maxY);
  minX = Math.ceil(minX);
  maxX = Math.floor(maxX);
  
  let locRandomY = Math.floor(Math.random() * (maxY - minY)) + minY;
  let locRandomX = Math.floor(Math.random() * (maxX - minX)) + minX;
  
  randomY = locRandomY;
  randomX = locRandomX;
  return;
}

// let getInputValue = document.getElementById('total-input');
// let counter = 0;



function play() {

  let elemScore = 0;
  let totalScore = 0;
  let overScore = 100;
  console.log(totalScore);

  // Задаем каждому элементу случайное позиционирование
  function setRandomPositionElem() {

    if ( totalScore < overScore ) {

      elements.forEach(function (item) {
        getRandomCoordinates(0, getHeight, 0, getWidth, elements);
        item.style.cssText = `top: ${randomY}px; left: ${randomX}px`;
        item.textContent = item.getAttribute('data-score');
        item.addEventListener('click', clickCounter);
      })
    }

    // console.log(totalScore);
    // console.log(elemScore);

  }setRandomPositionElem();
  
  // Клик по элементам и вывод набранных баллов
  function clickCounter() {
    let getInputValue = document.getElementById('total-input');
    
    elemScore = +this.getAttribute('data-score');
    totalScore += elemScore;
    getInputValue.value = 0 + totalScore;
    
    if ( totalScore >= overScore ) {
      setTimeout(function() {
        alert(`Congratulations! ${totalScore}`)
      }, 300)
    } else {
      // console.log('over');
    }
    // console.log(totalScore);
    
    return totalScore
  }
}

play();


