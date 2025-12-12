// 문자열 겹쳐쓰기1 (splice)
my_string = 'He11oWor1d';
overwrite_string = 'lloWorl';
s = 2;

const strArr = my_string.split('');
strArr.splice(s, overwrite_string.length, overwrite_string);
console.log(strArr.join(''));

// 문자열 겹쳐쓰기2 (slice)
console.log(
  my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length)
);

// 문자열 섞기
str1 = 'aaaaa';
str2 = 'bbbbb';
answer = '';

for (let i = 0; i < str1.length; i++) {
  answer += str1[i];
  answer += str2[i];
}

console.log(answer);

// 문자열 섞기2
console.log([...str1].map((x, idx) => x + str2[idx]).join(''));

// 문자 리스트를 문자열로 변환하기
arr = ['a', 'b', 'c'];
console.log(arr.join(''));

// 문자열 곱하기
my_string = 'love';
k = 3;
console.log(my_string.repeat(k));

// 더 크게 합치기 1
let a = 9;
let b = 91;
result1 = Number(String(a) + String(b));
result2 = Number(String(b) + String(a));
console.log( result1 > result2 ? result1 : result2 );

// 더 크게 합치기 2
console.log( Math.max(Number(`${a}${b}`), Number(`${b}${a}`)) );

// 두 수의 연산값 비교하기
console.log( Math.max(Number(`${a}${b}`), 2 * a * b) );

// n의 배수
let num = 98;
let n = 2;
console.log(num%n ? 0 : 1);
console.log(num%n === 0 ? 1 : 0);

// 공배수
let m = 3;
console.log(num % n === 0 && num % m === 0 ? 1 : 0);