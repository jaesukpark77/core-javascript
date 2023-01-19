/* global gsap */


import { xhrData,insertLast, xhrPromise, delayP, jason, renderUserCard, getNode, changeColor, renderSpinner } from "./lib/index.js";

/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users',
  (res) => {
    insertLast('body', JSON.stringify(res))
  },
  (err) => {
    insertLast('body', '데이터 로딩에 실패하였습니다.')
  }
) */

/* xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1')
.then((res) =>{
  insertLast(document.body, JSON.stringify(res));
})
.catch((err) => {
  console.log(err);
}) */

/* async function render(){

  await delayP(2000);
  let response = await jason.get('https://jsonplaceholder.typicode.com/users/1');
  console.log(response.data);
}

render() */

// rendingUserList 함수 만들기
// ajax(jason) get user list

// 유저 카드 생성
// 생성된 카드로 랜더링


const userCardContainer = getNode('.user-card-inner');

async function rendingUserList() {
  
  renderSpinner(userCardContainer);

  try{
    await delayP(2000);
    getNode('.loadingSpinner').remove();
  
    let response = await jason.get('https://jsonplaceholder.typicode.com/users');
    let userData = response.data;
    userData.forEach(data => renderUserCard(userCardContainer, data))
  
  
    console.log(gsap.utils.toArray('.user-card'));
  
    changeColor('.user-card')
  
    gsap.to(gsap.utils.toArray('.user-card'),{
      x:0,
      opacity:1,
      duration:1.5,
      stagger:0.2
    })

  }catch(err){
    console.log(err);
  }
}

rendingUserList()


