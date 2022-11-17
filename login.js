let buttonSubmit = document.querySelector('#button-submit');
let input = document.querySelector('#input');
let form = document.querySelector('#form');

function submit(event) {
  event.preventDefault();
  let inputValue = input.value;
  console.log(inputValue);
  localStorage.setItem('key', inputValue);
}

form.addEventListener('submit', submit);