/* global gsap */


import { 
  xhrData,
  insertLast, 
  xhrPromise, 
  delayP, 
  jason, 
  renderUserCard, 
  getNode as $, 
  changeColor, 
  renderSpinner, 
  renderEmptyCard,
  attr
} from "./lib/index.js";

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


const userCardContainer = $('.user-card-inner');

async function rendingUserList() {
  
  renderSpinner(userCardContainer);

  try{
    await delayP(2000);
    $('.loadingSpinner').remove();
  
    // let response = jason.get('http://localhost:3000/users'); // promise가 반환된다.
    // let response = jason.get('http://localhost:3000/users').then((rest)=>{console.log(res)}); 
    let response = await jason.get('http://localhost:3000/users'); // 우리 서버로 바꾼다!!!
    let userData = response.data; // response 안의 data에 존재 
    userData.forEach(data => renderUserCard(userCardContainer, data))
  
  
    // console.log(gsap.utils.toArray('.user-card'));
  
    changeColor('.user-card')
  
    gsap.to(gsap.utils.toArray('.user-card'),{
      x:0,
      opacity:1,
      duration:1.5,
      stagger:0.2
    })

  }catch(err){
    renderEmptyCard(userCardContainer)
  }
}

rendingUserList()

// handler에서는 async / await 사용하지 말자 

function handler(e) {
  // e.target => 내가 클릭한 걸 파악하기 위함
  let deletButton = e.target.closest('button'); // closest : 대상의 인접한 부분을 찾는다.
  let article = e.target.closest('article'); // article을 가져오는 이유 -> data-index의 user-1에 숫자가 필요하기 때문
  
  if(!deletButton || !article) return; // 삭제 버튼을 누를 경우에 실행
  // ||의 경우 문에서 사용하냐 식에서 사용하냐가 다른 의미이다!!!
  // 식 -> 첫번쨰 truthy를 찾는다.

  let id = attr(article, 'data-index').slice(5); // user-1이 반환되어 slice를 해준다.

  jason.delete(`http://localhost:3000/users/${id}`).then(()=>{

    // 지우고 다시 reload하기 위한 방법
    userCardContainer.innerHTML = '';
    rendingUserList(); // repaint 시킨다

  })

}

userCardContainer.addEventListener('click', handler);

