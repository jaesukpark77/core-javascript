/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log(extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// 부분 문자열 추출
let slice = message.slice(8);
console.log(slice);

let subString = message.substring(0, 3);
console.log(subString);

let subStr;


// 문자열 포함 여부 확인
let indexOf = message.indexOf('i');
console.log(indexOf);

let lastIndexOf = message.lastIndexOf('i');
let includes = message.includes('Less');
console.log(includes);

let startsWith = message.startsWith('L');
console.log(startsWith);

let endsWith = message.endsWith('.');
console.log(endsWith);


// 공백 잘라내기
let trimLeft = message.trimLeft();
console.log(trimLeft);

let trimRight = message.trimRight();
console.log(trimRight);
let trim = message.trim();

let replace = message.replace(/\s*/g, '');
console.log(replace);


// 텍스트 반복
let repeat = message.repeat(3);
console.log(repeat);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log(toLowerCase);

let toUpperCase = message.toUpperCase();
console.log(toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;

/* function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
} */