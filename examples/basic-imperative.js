const rate = 1000;
let lastClick = Date.now() - rate;
const button = document.querySelector('button');

button.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`Clicked ${++count} times`);
    lastClick = Date.now();
  }
});