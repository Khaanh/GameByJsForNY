// 1. Получение размера рабочей области. +
// 2. Написать функцию генерирующую рандомные координаты(X,Y). +
// 3. Написать анимацию появление падающих элементов.
// 4. Написать счетчик элементов (<=10).
// 5. Написать функцию подсчета кол-во набранных баллов.

let getWidth      = document.body.clientWidth,
getHeight     = window.innerHeight,
windowWidth   = document.getElementById('js-width'),
windowHeight  = document.getElementById('js-height'),
elements      = document.querySelectorAll('.box');

windowWidth.textContent = `Width: ${getWidth}`;
windowHeight.textContent = `Heigth: ${getHeight}`;

// Получение случайного целого числа в заданном интервале для значении X,Y
// getRandomCoordinates(0, getHeight, 0, getWidth)
  // function getRandomCoordinates(minY, maxY, minX, maxX, elements) {
  //   minY = Math.ceil(minY);
  //   maxY = Math.floor(maxY);
  //   minX = Math.ceil(minX);
  //   maxX = Math.floor(maxX);
    
  //   const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;
  //   const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
    
  //   // elements.setAttribute('style', `top: ${randomY}px; left: ${randomX}px`)
  //   // element.style.cssText = `top: ${randomY}px; left: ${randomX}px`;
    
  //   console.log(`randomY: ${randomY}`);
  //   console.log(`randomX: ${randomX}`);

  //   // for (let i = 0; i < elements.length; i++) {
  //   //   console.log(elements[i]);
  //   //   elements[i].style.cssText = `top: ${randomY}px; left: ${randomX}px`;
      
  //   // }
  // }

  let i = 0;
  let randomY = 0;
  let randomX = 0;
  
  function getRandomCoordinates(minY, maxY, minX, maxX) {
    minY = Math.ceil(minY);
    maxY = Math.floor(maxY);
    minX = Math.ceil(minX);
    maxX = Math.floor(maxX);
    
    const locRandomY = Math.floor(Math.random() * (maxY - minY)) + minY;
    const locRandomX = Math.floor(Math.random() * (maxX - minX)) + minX;
    
    console.log(`randomY: ${locRandomY}`);
    console.log(`randomX: ${locRandomX}`);

    randomY = locRandomY;
    randomX = locRandomX;
    return;
  }

  elements.forEach(function (item, value) {
    getRandomCoordinates(0, getHeight, 0, getWidth, elements);
    console.log(`item: ${item} --- value: ${value}`);
    item.style.cssText = `top: ${randomY}px; left: ${randomX}px`
  })
  
  // while (i < elements.length) {
  //   getRandomCoordinates(0, getHeight, 0, getWidth, elements);
  //   console.log(randomY, randomX);

  //   console.log(elements[i]);
  //   elements[i].style.cssText = `top: ${randomY}px; left: ${randomX}px`
  //   i++;
  // }