const btn = document.getElementById("button");
let form = document.querySelector('#form');
let cardList = document.querySelector(".cards-list");
let newCardName = document.querySelector("#input-name");
let newCardTitle = document.querySelector("#input-title");
let newCardText = document.querySelector("#input-text");

const authKey = localStorage.getItem('key');

function addCard(event) {
  event.preventDefault();
  let cardItemAll = document.querySelectorAll(".card-item");
  let firstCardItem = cardItemAll[0];
  let cardItem = document.createElement('li');
  cardItem.className = 'card-item';
  let cardItemName = newCardName.value;
  let cardItemTitle = newCardTitle.value;
  let cardItemText = newCardText.value;
  cardItem.innerHTML = '<p class="card-name">'+cardItemName+'</p> <h2 class="card-title">'+cardItemTitle+'</h2> <p class="card-text">'+cardItemText+'</p>';
  cardList.insertBefore(cardItem, firstCardItem);

  const url = 'http://wbwf.space/api/test/';
  console.log(url);

  axios({"url":url, "method": "post", headers: {auth: authKey}, data: {
    name: cardItemName,
    title: cardItemTitle,
    text: cardItemText
  }})
}

function validation() {
  let titleLength = newCardTitle.value.trim().length;
  if (titleLength !== 0) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', '');
  }
}

const url = 'http://wbwf.space/api/test';

function updatePage() {
  const url = 'http://wbwf.space/api/test';
  axios({"url":url, "method": "get", headers: {auth: authKey}}).then(res => {
    console.log(res);

    let dataLength = res.data.data.length;
    let dataDataData = res.data.data;

    for (let i = 0; i < dataLength; i++) {
      let cardItemAll = document.querySelectorAll(".card-item");
      let lastItem = document.createElement('li');
      lastItem.className = 'card-item'
      let lastItemName = dataDataData[i].name || '';
      let lastItemTitle = dataDataData[i].title || '';
      let lastItemText = dataDataData[i].text || '';
      lastItem.innerHTML = '<p class="card-name">'+lastItemName+'</p> <h2 class="card-title">'+lastItemTitle+'</h2> <p class="card-text">'+lastItemText+'</p>';
      let firstTwoCardItem = cardItemAll[0];
      cardList.insertBefore(lastItem, firstTwoCardItem);
    }
  })
}

updatePage();

newCardTitle.addEventListener('input', validation);
form.addEventListener("submit", addCard);