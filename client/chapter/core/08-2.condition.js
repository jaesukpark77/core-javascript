/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age;

if(age >= 14 && age <= 90);


let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};

// 실습
let userName = prompt('아이디를 입력하세요 : ');

// if(userName === "Admin" && userPw === "TheMaster"){
//   console.log('Welcome!');
// }else if(userName === "Admin" && userPw !== "TheMaster"){
//   console.log('Wrong password');
// }else{
//   console.log("I don't know you");
// }

if(userName === 'Admin'){
  let userPw = prompt('비밀번호를 입력하시오 : ');

  if(userPw === "TheMaster"){
    console.log('환영합니다.');
  }else{
    console.log('취소되었습니다.');
  }
}else if(userName === '' || userName === null){
  console.log('취소했습니다.');
}else{
  console.log('인증되지 않은 사용자입니다.');
}