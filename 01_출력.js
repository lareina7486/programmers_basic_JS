// 문자열 출력하기
str = 'HelloWorld';
console.log(str);

// a와 b 출력하기
line = '4 5';
input = line.split(' ');
console.log(`a = ${input[0]}`);
console.log(`a = ${input[1]}`);

// 문자열 반복해서 출력하기
line = 'string 5';
input = line.split(' ');

str = '';
n = Number(input[1]); // readline으로 입력받으면 String
for (let i = 0; i < n; i++) {
  str += input[0];
}
console.log(str);

// 문자열 반복해서 출력하기 문자열 함수 사용)
str2 = input[0];
console.log(str2.repeat(n)); // str.repeat(n)

// 대소문자 바꿔서 출력하기
mixedString = 'aBcDeFg';
changeStr = '';

for (let ch of mixedString) {
  if (ch >= 'A' && ch <= 'Z') {
    changeStr += ch.toLowerCase();
  } else {
    changeStr += ch.toUpperCase();
  }
}
console.log(changeStr);

// 대소문자 바꿔서 출력하기 (forEach 사용)
str2 = mixedString.split(''); // 배열로 반환
// changeStr2 = '';
str2.forEach((value, index) => {
  // forEach(): 배열 각 요소에 대해 한번씩 콜백 함수 실행
  if (value === value.toUpperCase()) {
    str2[index] = value.toLowerCase();
  } else {
    str2[index] = value.toUpperCase();
  }
});
console.log(str2.join(''));

// 대소문자 바꿔서 출력하기 (Map 사용)
str3 = mixedString.split('');

const changeStr2 = str3.map((value) => {
  if (value === value.toUpperCase()) {
    return value.toLowerCase();
  } else {
    return value.toUpperCase();
  }
});

console.log(changeStr2.join(''));

/////////////////////////////////////////////////////

// 특수문자 출력하기
console.log(`!@#$%^&*(\\'"<>?:;`); // 백슬래쉬만 두개 써줌(이스케이프 문자)

// 덧셈식 출력하기
line = "4 5";
input = [];
input = line.split(' ');
const a = Number(input[0]);
const b = Number(input[1]);
console.log(`${a} + ${b} = ${a + b}`);

// 문자열 붙여서 출력하기
line = "apple pen banna pencil"
strArr = line.split(' ');
console.log(strArr.join(''));

// 문자열 돌리기
turnStr = "abcde";
turnStr.split('').forEach( value => console.log(value) );

// 문자열 돌리기 (다른방법)
[...turnStr].forEach( value => console.log(value) );

// 홀짝 구분하기
n = Number('100');
console.log(n%2===0? `${n} is even`:`${n} is odd`);