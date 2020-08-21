let getWidth      = document.body.clientWidth,
    getHeight     = window.innerHeight,
    windowWidth   = document.getElementById('js-width'),
    windowHeight  = document.getElementById('js-height'),
    element       = document.getElementById('box');

windowWidth.textContent = `Width: ${getWidth}`;
windowHeight.textContent = `Heigth: ${getHeight}`;

// Получение случайного целого числа в заданном интервале для значении Y
function getRandomCoordinatesY(minY ,maxY, minX, maxX) {
  minY = Math.ceil(minY);
  maxY = Math.floor(maxY);
  minX = Math.ceil(minX);
  maxX = Math.floor(maxX);

  let randomY = Math.floor(Math.random() * (maxY - minY)) + minY;
  let randomX = Math.floor(Math.random() * (maxX - minX)) + minX;

  element.setAttribute('style', `top: ${randomY}px; left: ${randomX}px`)
}
getRandomCoordinatesY(0, getHeight, getWidth, 0)


// function getRandomCoordinatesX(min ,max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   let randomX = Math.floor(Math.random() * (max - min)) + min;
//   element.setAttribute('style', `left: ${randomX}px;`)
// }
// getRandomCoordinatesX(getWidth, 0)

