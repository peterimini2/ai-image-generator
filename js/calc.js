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

acBtn.addEventListener("click", () => {
  displayBox.value = "";
})
delBtn.addEventListener("click", () => {
  displayBox.value = "";
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