const buttonCreateLetter = document.getElementById('criar-carta');

function getWords() {
  const getInputElement = document.getElementById('carta-texto');
  const getLetterContent = getInputElement.value;
  const arrayWords = getLetterContent.split(' ');

  return arrayWords;
}

function clearP() {
  const getSpanElements = document.querySelectorAll('.span-word');
  for (let index = 0; index < getSpanElements.length; index += 1) {
    getSpanElements[index].remove();
  }
}

function createLetter() {
  const getInputContent = document.getElementById('carta-texto').value;
  const getElementP = document.getElementById('carta-gerada');
  const arrayWords = getWords();
  if (getInputContent === '' || arrayWords[0] === '') {
    getElementP.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    clearP();
    getElementP.innerText = '';
    for (let index = 0; index < arrayWords.length; index += 1) {
      const span = document.createElement('span');
      const getPElement = document.getElementById('carta-gerada');
      span.innerText = arrayWords[index];
      span.className = 'span-word';
      getPElement.appendChild(span);
    }
  }
}
buttonCreateLetter.addEventListener('click', createLetter);
