/* eslint no-undef:'warn' */
/* eslint no-unused-vars:'off' */

const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const done = getNode('#done');


function getInputValue(node) {
  if (typeof node === 'string') node = geteNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.')
  return node.value
}

const sum = (valueA, valueB) => valueA + valueB;

function clearContents(node) {
  if (typeof node === 'string') node = getNode(node);
  node.textContent = '';
}

function handler(e) {
  e.preventDefault();

  // input value는 string 형태로 넘어온다 => 그래서 int 형태로 변경!!!
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents('.result');
  insertLast('.result', total);
}

function inputHandler(e) {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents('.result');
  insertLast('.result', total);
}

done.addEventListener('click', handler);

firstInput.addEventListener('change', inputHandler)
secondInput.addEventListener('change', inputHandler)