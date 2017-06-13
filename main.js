const list = document.querySelector('ul');
const input = document.querySelector('input');
const form = document.querySelector('form');
const button = document.querySelector('button');
const choice = document.querySelector('.choice');
let choices = [];

function chooseOne(e) {
  let rdm = Math.random();
  let idx = Math.floor(rdm * choices.length);
  choice.innerHTML = `${choices[idx]} sounds good!`;
}

function addToList(e) {
  e.preventDefault();
  elements = document.querySelectorAll('li');
  choices.push(input.value);
  list.innerHTML =
    choices
      .map(choice => `<li>${choice}</li>`)
      .join('');
  input.value = '';
}

form.addEventListener('submit', addToList);
button.addEventListener('click', chooseOne);
