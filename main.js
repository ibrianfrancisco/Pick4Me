const list = document.querySelector('ul');
const input = document.querySelector('input');
const form = document.querySelector('form');
const button = document.querySelector('button');
const choice = document.querySelector('.choice');
let trigger = false;
let choices = [];

function chooseOne(e) {
  let idx = Math.floor(Math.random() * choices.length);
  if (!trigger) return choice.innerHTML = 'Enter some choices!';
  choice.innerHTML = `${choices[idx]} sounds good!`;
}

function addToList(e) {
  e.preventDefault();
  if (input.value === '') return;
  trigger = true;
  choices.push(input.value);
  list.innerHTML =
    choices
      .map(choice => `<li>${choice}</li>`)
      .join('');
  choice.innerHTML = '';
  input.value = '';
}

function reset() {
  list.innerHTML = '';
  choice.innerHTML = '';
  choices = [];
  trigger = false;
}

form.addEventListener('submit', addToList);
button.addEventListener('click', chooseOne);
