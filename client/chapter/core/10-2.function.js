/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  // console.log(arguments);

  // 함수 안에서 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 타입으로 불리는 변수 : arguments
  // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구할 수 console.error('있다',있다)
  // 유사베열은 배열이 아니다 .고로 베열의 능력을 사용하려면 진.짜. 배열로 만들어야 한다.
  // 배열의 능력 : forEach, reduece

  let total = 0;

  let arr = Array.from(arguments); //static method
  // let arr = Array.prototype.slice.call(arguments);
  console.log(arr);

/*   arr.forEach(function (item, index) {
    total += item
  }) */


/*   let total = 0;
  for(let value of arguments){
    total += value;
  }
 */
/*   for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
 */
  // return moneyA + moneyB + moneyC + moneyD;
  // return total
  return arr.reduce(function (acc, item) {
    return acc + item
  })
};

console.log(calculateTotal(100,500,400,150,400,150));

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};


// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url, resolve, reject) {
  
  if(typeof url === 'string' && url.match(/http.+www/)){
    resolve(url);
  }else{
    reject();
  }
};

callbackFunctionExpression(
  'https://www.naver.com',
  function (url) {
    console.log(`${url} 해당 페이지로 이동합니다.`);
  },
  function () {
    throw new Error('url 입력 정보가 올바르지 않습니다.')
  }
)

// 함수 선언문 vs. 함수 (표현)식
function aa(){

}

const bb = function(){}


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

(function () {
  console.log('hi');
})()

const MASTER = (function ($) { // parmeter

  const KEY = 'abcdef';

  // 내가 보내고 싶은 항목들만 내보낼꺼야
  // 모듈로서의 활용
  // 정보 은닉화 incapsulation : 외부의 접근 차다
  // 일부 정보만 노출

  return {
    getKey: function () {
      return KEY
    }
  }
})() // arguments

console.log(MASTER.getKey());