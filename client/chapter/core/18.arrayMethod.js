/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000]
console.log(typeof arr);

function isArray(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}

function isNull(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'
}

console.log(Array.isArray([]));

/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {}

arr.forEach(function (item, index) {
  this[index] = item
}, user)

const span = document.querySelectorAll('span');


span.forEach((item,index)=>{

  item.addEventListener('click',(e)=>{
    console.log(e.target.style.background = 'orange');
    console.log(index);
  })
  
})


/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

let todo = ['밥먹기', '미용실가기', '코딩공부하기']

let template = todo.map((todoList) => {
  return /* html */ `<li>${todoList}</li>`
})

template.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item)
})

console.log(template);

let newArray = arr.map(item => item * 2)

console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 -------------------------------------------------------------- */
// find
// findIndex
const users = [
  {id:1, name:'로운'},
  {id:2, name:'승택'},
  {id:3, name:'연주'},
]

const find = users.find((item, index) => {
  return item.id < 5
})

const findIndex = users.findIndex(item =>{
  return item.id === 3
})

console.log(find);
console.log(findIndex);


/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

let result = arr.filter((number) => {
  return number > 100
})

console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
const friends = [
  {
    name: '유재석',
    age : 50,
    job : 'mc'
  },
  {
    name : '김종국',
    age : 46,
    job : '헬스원장'
  },
  {
    name : '조세호',
    age : 40,
    job : '집사'
  }
];


// reduce
let age = friends.reduce((acc, cur) => {
  return acc += cur.age
}, 0)

console.log(age);

let template2 = todo.reduce((acc, cur, index) => {
  return /* html */ acc + `<li>할일${index+1} : ${cur}</li>`
}, '')

console.log(template2);
// reduceRight


/* string ←→ array 변환 ------------------------------------------------- */
// split
// join

let str = '재석 종국 소민 세찬 지효 하하'

let nameArray = str.split(' ');

console.log(nameArray);

console.log(nameArray.join(' / '));