const buttonCreateLetter = document.getElementById('criar-carta');

function getWords() {
  const getInputElement = document.getElementById('carta-texto');
  const getLetterContent = getInputElement.value;
  const arrayWords = getLetterContent.split(' ');

  return arrayWords;
}
const getElementP = document.getElementById('carta-gerada');
function clear() {
  const getSpanElements = document.querySelectorAll('.span-word');
  for (let index = 0; index < getSpanElements.length; index += 1) {
    getSpanElements[index].remove();
  }
  getElementP.innerText = '';
}

function randomStyle() {
  const randomNumber = Math.round(Math.random() * 9) + 1;
  let wordStyle = '';
  switch (randomNumber) {
  case 1:
    wordStyle = 'newspaper';
    break;
  case 2:
    wordStyle = 'magazine1';
    break;
  case 3:
    wordStyle = 'magazine2';
    break;
  case 4:
    wordStyle = 'medium';
    break;
  case 5:
    wordStyle = 'big';
    break;
  case 6:
    wordStyle = 'reallybig';
    break;
  case 7:
    wordStyle = 'rotateleft';
    break;
  case 8:
    wordStyle = 'rotateright';
    break;
  case 9:
    wordStyle = 'skewleft';
    break;
  case 10:
    wordStyle = 'skewright';
    break;
  default:
    break;
  }
  return wordStyle;
}

function bothStyles(style1) {
  let style2 = style1;
  for (let index = 0; style2 === style1; index += 1) {
    style2 = randomStyle();
  }
  return style2;
}

function createLetter() {
  const getInputContent = document.getElementById('carta-texto').value;
  const arrayWords = getWords();
  if (getInputContent === '' || arrayWords[0] === '') {
    getElementP.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    clear();
    for (let index = 0; index < arrayWords.length; index += 1) {
      const span = document.createElement('span');
      const getPElement = document.getElementById('carta-gerada');
      span.innerText = arrayWords[index];
      span.classList.add('span-word');
      const style1 = randomStyle();
      span.classList.add(style1);
      span.classList.add(bothStyles(style1));
      getPElement.appendChild(span);
    }
  }
}
buttonCreateLetter.addEventListener('click', createLetter);
