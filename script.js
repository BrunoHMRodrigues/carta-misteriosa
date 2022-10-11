const buttonCreateLetter = document.getElementById('criar-carta');

function getWords() {
  const getInputElement = document.getElementById('carta-texto');
  const getLetterContent = getInputElement.value;
  const arrayWords = [];
  let word = '';

  for (let index = 0; index < getLetterContent.length; index += 1) {
    if (getLetterContent[index] === ' ') {
      arrayWords.push(word);
      word = '';
    } else if (index === (getLetterContent.length - 1)) {
      word += getLetterContent[index];
      arrayWords.push(word);
      word = '';
    } else {
      word += getLetterContent[index];
    }
  }
  return arrayWords;
}

function clearP() {
  const getSpanElements = document.querySelectorAll('.span-word');
  for (let index = 0; index < getSpanElements.length; index += 1) {
    getSpanElements[index].remove();
  }
}

function createLetter() {
  clearP();
  const arrayWords = getWords();

  for (let index = 0; index < arrayWords.length; index += 1) {
    const span = document.createElement('span');
    const getPElement = document.getElementById('carta-gerada');
    span.innerText = arrayWords[index];
    span.className = 'span-word';
    getPElement.appendChild(span);
  }
}
buttonCreateLetter.addEventListener('click', createLetter);
