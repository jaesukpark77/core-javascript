import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode('.first');
const second = getNode('.second');

// 콜백 함수 연습
/* function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// 함수 안에 함수 안에 함수... -> 너무 많으면 콜백 지옥이 발생...
// 그래서 나온것이 프라미스 -> 가독성이 좋기위함!!!
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    first.style.transform = 'rotate(360deg)';
    delay(()=>{
      first.style.top = '0px';
    })
  })
}) */

/* delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  second.style.left = '100px'
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
  second.style.left = '0px'
}) */

// 사용하고 싶은 값만 받기 위해서!!!
const defaultOptions = {
  shouldReject: false,
  timeout : 1000,
  data : '성공',
  errorMessage : '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options = {}) {

  let config = {...defaultOptions} // 얕은 복사 진행 -> 참조 X(실제로 값이 변경되기 때문에)
  // let config = Object.assign({}, defaultOptions) // 얕은 복사 진행

  // timeout을 숫자로만 받기 위해서
  if(isNumber(options)){
    config.timeout = options;
  }

  // 객체 합성 mixin
  // 위에 정해진 객체와 내가 정한 파라미터로 받은 객체가 합쳐져서 하나로 쓰기 위함
  // 뒤에 있는 것이 앞에 있는 것에 중복이 되면 덮어진다!!!
  if(isObject(options)){ // options가 object인지 판단
    config = {...config, ...options};
  }

  const {shouldReject, data, errorMessage, timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // !shouldReject ? resolve(data) : reject(errorMessage);
      if(!shouldReject){
        resolve(data);
      }else{
        reject(errorMessage);
      }
    }, timeout);
  })
}

// delayP(true) -> 실패 / delayP(false) -> 성공


/* delayP(false, 1000, '진짜 성공', '오류가 발생했다!!').then((res) => {
  console.log(res); // 진짜 성공
})
 */


/* delayP(3000).then((res) => {
  console.log(res);
}) */

/* function delayP(timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('성공');
      reject('실패!');
    }, timeout);
  })
}
delayP()
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
}) */
