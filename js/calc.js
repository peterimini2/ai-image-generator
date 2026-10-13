const acBtn = document.querySelector('.ac-btn');
const displayBox = document.querySelector('.display');
const delBtn = document.querySelector('.del-btn');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const zero = document.querySelector('.zero');
const dot = document.querySelector('.dot');
const divideBtn = document.querySelector('.divide');
const multiplyBtn = document.querySelector('.multiply');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.add');
const equalToBtn = document.querySelector('.equal');
const percentBtn = document.querySelector('.percent');

acBtn.addEventListener("click", () => {
  displayBox.value = "";
})
delBtn.addEventListener("click", () => {
  displayBox.value = displayBox.value.slice(0, -1);
})
seven.addEventListener("click", () => {
  displayBox.value += Number(7);
})
eight.addEventListener("click", () => {
  displayBox.value += Number(8);
})
nine.addEventListener("click", () => {
  displayBox.value += Number(9);
})
four.addEventListener("click", () => {
  displayBox.value += Number(4);
})
five.addEventListener("click", () => {
  displayBox.value += Number(5);
})
six.addEventListener("click", () => {
  displayBox.value += Number(6);
})
one.addEventListener("click", () => {
  displayBox.value += Number(1);
})
two.addEventListener("click", () => {
  displayBox.value += Number(2);
})
three.addEventListener("click", () => {
  displayBox.value += Number(3);
})
zero.addEventListener("click", () => {
  displayBox.value += Number(0);
})
dot.addEventListener("click", () => {
  displayBox.value += ".";
})
divideBtn.addEventListener("click", () => {
  displayBox.value += "/";
})
multiplyBtn.addEventListener("click", () => {
  displayBox.value += "x";
})
minusBtn.addEventListener("click", () => {
  displayBox.value += "-";
})
plusBtn.addEventListener("click", () => {
  displayBox.value += "+";
})
// equalToBtn.addEventListener("click", () => {
//   displayBox.value += "=";
// })
percentBtn.addEventListener("click", () => {
  displayBox.value += "%";
})