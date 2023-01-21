import { typeError } from "../error/typeError.js";
import { getNode } from './../dom/getNode.js';
import { delayP } from "./delay.js";

/* 
  readyState
  0 : uninitalized -> 초기화
  1 : loading -> 로딩
  2 : loaded -> 로딩이 완료됨
  3 : interactive -> 인터랙티브
  4 : complete -> 완료
*/

const first = getNode('.first')
const second = getNode('.second')

export function xhrData({
  url='', 
  method='GET', 
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin' : '*' // 동일 정책을 위한 코드
  }
} = {}) {
// 파라미터는 객체만 받아야 함으로 default 값을 객체로 설정한다!!!!

  // const {method, url, body} = options
  const xhr = new XMLHttpRequest();
  
  // .open() + .send() => 항상 세트임!!!!
  // 비동기 통신 오픈
  xhr.open(method, url);

  // console.log(Object.entries(headers));
  // headers 설정하는 방법
  // 나중에 delete 통신 할 때 오류 발생 가능 -> 그래서 주석 처리
/*   Object.entries(headers).forEach(([key, value])=>{
    xhr.setRequestHeader(key, value);
  }) */

  // 객체 구조 분해 할당  
  // readyState가 바뀔 때 마다 변경하기 위햐  readystatechange 이벤트 적용!!!
  xhr.addEventListener('readystatechange', () => {
    const {status, readyState, response} = xhr; // 객체 구조 분해 할당

    if(status >= 200 && status < 400){
      if (readyState === 4) {
        console.log('통신 성공');
        // 객체화를 위해 JSON.parse() 이용
        onSuccess(JSON.parse(response));
      }
    }else{
      // console.error();
      onFail('통신 실패')
    }
  })
  // 서버에 요청
  xhr.send(JSON.stringify(body));
}

/* xhrData({
  url: 'https://jsonplaceholder.typicode.com/users',
  onSuccess: (result) => {
    console.log(result);
  },
  onFail : (err) =>{
    console.error(err);
  }
}) */

// shorthand property
xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url, // url:url
    onSuccess, // onSuccess : onSuccess
    onFail // onFail : onFail
  })
}

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}

/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users',
  (result)=>{
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
)

xhrData.post(
  'https://jsonplaceholder.typicode.com/users',
  {
    "name": "MESSI",
    "username": "GOAT",
    "email": "goat@messi.psg",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  (result)=>{
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
) */


/* xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
    "name": "MESSI",
    "username": "GOAT",
    "email": "goat@messi.psg",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
) */


// promise API

const defaultOptions = {
  url:'',
  method:'GET',
  headers:{
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body:null
}

export function xhrPromise(options = {}) {
  const xhr = new XMLHttpRequest();

  // 한 번에 구조분해할당 때려버리기!!!!
  const {method, url, body, headers} = Object.assign({}, defaultOptions, options);

  if(!url) typeError('서바와 통신할 url 인자는 반드시 필요합니다.');
  
  xhr.open(method, url);

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', ()=>{
      const {status, readyState, response} = xhr;

      if(status >= 200 && status < 400){
        if(readyState === 4){
          resolve(JSON.parse(response)); // .then((res) => {res})의 값을 받기 위해서!!!
        }
      }else{
        reject('에러입니다.');
      }
    })
  })
}

/* xhrData.get(
  'wwww.naver.com',
  ()=>{}, // success
  ()=>{} // fail
) */

/* xhrPromise({
  url:'https://jsonplaceholder.typicode.com/users/1'
})
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
}) */

// 프로미스 객체가 뛰어 나와야함으로 return을 시킨다.
xhrPromise.get = (url) =>{
  return xhrPromise({
    url
  })
}

xhrPromise.post = (url, body) =>{
  return xhrPromise({
    url,
    body,
    method:'POST'
  })
}

xhrPromise.put = (url, body) =>{
  return xhrPromise({
    url,
    body,
    method:'PUT'
  })
}

xhrPromise.delete = (url) =>{
  return xhrPromise({
    url,
    method:'DELETE'
  })
}

/* xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1') // promise가 나온다.
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
}) */

// async await

// async : 일반 함수를 promise를 반환하는 함수로 만든다.
// await : 1. promise가 반환하는 result를 가져오기
//         2. 코드 실행 흐름 제어

/* function delayA() {
  return new Promise((resolve, reject) => {
    resolve('완료')
  })
} */
// 같은 역할 -> 갓 async
async function delayA(){
  return '완료'
}
// let result = delayA().then((res) => {console.log(res);});
let result = await delayA(); // 값이 담긴다!!!
// console.log(result);


async function 라면끌이기() {
  try {
    await delayP()
    first.style.top = '-100px';

    await delayP()
    first.style.transform = 'rotate(360deg)';

    await delayP()
    first.style.top = '0px';

    await delayP()
    console.log('계란 넣기');

    // throw new Error('계란 껍질이 들어가버렸다!')
    await delayP()
    console.log('그릇에담기');
  } catch (err) {
    console.log(err);
  }
}

// 라면끌이기()