// let btnCircle = document.getElementsByClassName("cricle");
const btn = document.getElementById("button");
let form = document.querySelector('#form');
let cardList = document.querySelector(".cards-list");
let cardItemAll = document.querySelectorAll(".card-item");
let newCardTitle = document.querySelector("#input-title");
let newCardText = document.querySelector("#input-text");

// console.log(cardItem);
// let firstCardItem = cardItem[0];
// console.log(firstCardItem);


function addCard(event) {
  event.preventDefault();
  console.log(cardItemAll);
  let firstCardItem = cardItemAll[0];
  console.log(firstCardItem);
  let cardItem = document.createElement('li');
  cardItem.className = 'card-item';
  let cardItemTitle = newCardTitle.value;
  let cardItemText = newCardText.value;
  cardItem.innerHTML = '<h2 class="card-title">'+cardItemTitle+'</h2> <p class="card-text">'+cardItemText+'</p>';
  cardList.insertBefore(cardItem, firstCardItem);
  console.log(cardItemAll[0]);
}

function validation() {
  let titleLength = newCardTitle.value.trim().length;
  if (titleLength !== 0) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', '');
  }
}

newCardTitle.addEventListener('input', validation);
form.addEventListener("submit", addCard);