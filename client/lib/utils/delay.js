import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode('.first');
const second = getNode('.second');

/* function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

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

const defaultOptions = {
  shouldReject: false,
  timeout : 1000,
  data : '성공',
  errorMessage : '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options = {}) {

  let config = {...defaultOptions} // 얕은 복사 진행
  // let config = Object.assign({}, defaultOptions) // 얕은 복사 진행

  if(isNumber(options)){
    config.timeout = options;
  }

  // 객체 합성 mixin
  if(isObject(options)){
    config = {...config, ...options};
  }

  const {shouldReject, data, errorMessage, timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
      // if(!shouldReject){
      //   resolve('성공');
      // }else{
      //   reject('실패!');

      // }
    }, timeout);
  })
}

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
