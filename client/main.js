import { xhrData,insertLast, xhrPromise } from "./lib/index.js";

/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users',
  (res) => {
    insertLast('body', JSON.stringify(res))
  },
  (err) => {
    insertLast('body', '데이터 로딩에 실패하였습니다.')
  }
) */

xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1')
.then((res) =>{
  insertLast(document.body, JSON.stringify(res));
})
.catch((err) => {
  console.log(err);
})