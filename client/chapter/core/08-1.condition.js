/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let number = prompt('숫자를 입력해 주세요: ', 0);

let answer = (number > 0) ? '1' : (number<0) ? '-1' : '0';

console.log(answer);


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No5

// 영화 봤니?
let didWatchMovie = "yes";

// 영화 볼거니?
let goingToWatchMovie = "no";


if(didWatchMovie.includes("yes")){  // if 문(statement)
  console.log('그거 재미있더라!!');
}else if(goingToWatchMovie === "yes"){ // else if 복수 조건 처리
  console.log('너무 설랜다');
}else{ // else 절(caluse)
  console.log("난 별로....");
}

let movieMessage = didWatchMovie.includes('yes') ? '그거 너무 재밌더라' : goingToWatchMovie === "yes" ? '너무 설랜다' : '난 별로....'

// 조건부 연산자

// 멀티 조건부 연산자 식