let docWidth = window.innerWidth,
    docHeight = window.innerHeight;

let winWidth = document.getElementById('js-width'),
    winHeight = document.getElementById('js-height');

winWidth.textContent = `Width: ${docWidth}`;
winHeight.textContent = `Heigth: ${docHeight}`;