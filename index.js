// 1. Получение размера рабочей области.
// 2. Написать функцию генерирующую рандомные координаты(X,Y).
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
  
  while (i < elements.length) {
    function getRandomCoordinates(minY, maxY, minX, maxX, elements) {
      minY = Math.ceil(minY);
      maxY = Math.floor(maxY);
      minX = Math.ceil(minX);
      maxX = Math.floor(maxX);
      
      const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;
      const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
      
      console.log(`randomY: ${randomY}`);
      console.log(`randomX: ${randomX}`);
      return randomX;
    }
    
    getRandomCoordinates(0, getHeight, 0, getWidth, elements);
    // elements[i].style.cssText = `left: ${randomX}px`
    console.log(elements[i]);
    i++;
  }