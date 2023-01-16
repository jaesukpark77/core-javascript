import { attr, clearContents ,diceAnimation, disableElement, enableElement, getNode, getNodes, invisibleElement, insertLast, visibleElement } from "./lib/index.js";

/* 
  [주사위 굴리기]
  1. dice 애니매이션 불러오기
  2. bindEvent 유틸 함수 만들기
  3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기
  4. 변수 보호를 위한 클로저 + IIFE 사용하기
*/

/* 
  [레코트 리스트 보이기]
  1. handleRecord 함수를 만들기
  2. disable 활성 유틸 함수 만들기
  3. handleReset 함수 만들기
  4. visible 활성 유틸 함수 만들기
  5. toggleState 유틸 함수 만들기
*/

/* 
  [레코트 탬플릿 뿌리기]
  1. renderRecordListItem 함수 만들기
  2. HTML 템플릿 만들기
  3. 템플릿 뿌리기 
*/

/* 
  [초기화 시키기]
  1. clearContent 로 정보 지우기
  2. total, count 초기화 
  3. 스크롤 밑으로 보내기 
  4. 메모이제이션 패턴 
*/

// 배열의 구조분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper')
/* const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
const recordButton = getNode('.buttonGroup > button:nth-child(2)');
const resetButton = getNode('.buttonGroup > button:nth-child(3)'); */

/* -------------------------------------------------------------------------- */
/* event */
/* -------------------------------------------------------------------------- */

let count = 0;
let total = 0;

function renderRecordListItem() {
  let diceValue = Number(attr('#cube', 'data-dice'));
  let template = /* html */ `
  <tr>
    <td>${count++}</td>
    <td>${diceValue}</td>
    <td>${total += diceValue}</td>
  </tr>
  `
  insertLast('.recordListWrapper tbody', template);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}


// IIFE 패턴
const handleRollingDice = (() =>{
  let isRolling = false;
  let stopAnimation;
  
  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation,100);
      disableElement(recordButton);
      disableElement(resetButton);
    }else{
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }
  
    isRolling = !isRolling;
  }
})();

const handleRecord = () => {
  visibleElement(recordListWrapper);
  renderRecordListItem();
}

const handleReset = () => {
  count = 0;
  total = 0;

  invisibleElement(recordListWrapper);
  clearContents('.recordListWrapper tbody');
}

rollingDiceButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);


/* const handlerRollingDice = () =>{
  let isRolling = false;
  let stopAnimation;
  
  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation,100);
      disableElement(recordButton);
    }else{
      clearInterval(stopAnimation);
      enableElement(recordButton);
    }
  
    isRolling = !isRolling;
  }
}
rollingDiceButton.addEventListener('click', handlerRollingDice()) */
// -> 이미 한 번 실행한다!!!