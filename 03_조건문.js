// 홀짝에 따라 다른 값 반환하기
//// 미완료 /////

// 조건 문자열
ineq = '<';
eq = '=';
let n = 20;
let m = 50;

if (ineq === '>') {
  console.log(eq === '=' ? Number(n >= m) : Number(n > m));
} else {
  console.log(eq === '=' ? Number(n <= m) : Number(n < m));
}

// flag에 따라 다른 값 반환하기 1
let a = 10;
let b = 5;

flag = false;
console.log(flag ? a + b : a - b);

// 코드 처리하기
let ret = '';
let mode = 0;
const code = 'abc1abc1abc';

for (let idx = 0; idx < code.length; idx++) {
  if (mode === 0) {
    if (code[idx] !== '1') {
      if (idx % 2 === 0) {
        ret += code[idx];
      }
    } else {
      mode = 1;
    }
  } else {
    if (code[idx] !== '1') {
      if (idx % 2 === 1) {
        ret += code[idx];
      }
    } else {
      mode = 0;
    }
  }
}
console.log(ret === '' ? 'EMPTY' : ret);

// 등차수열의 특정한 항만 더하기

// 주사위 게임 2
const a1 = 4; const b1 = 4; const c1 = 4;

let triPlus = a1 + b1 + c1;
let triPow = a1 ** 2 + b1 ** 2 + c1 ** 2;
let triTriple = a1 ** 3 + b1 ** 3 + c1 ** 3;
if (a1 === b1 && b1 === c1) {
  console.log(triPlus * triPow * triTriple);
}

if (a1 === b1 || b1 === c1 || a1 === c1) {
  console.log(triPlus * triPow);
}
console.log(triPlus);


// 원소들의 곱과 합 (forEach)
num_list = [3, 4, 5, 2, 1];

let sum = 0;
let mul = 1;
num_list.forEach((value) => {
  sum += value;
  mul *= value;
});
console.log(sum ** 2 > mul ? 1 : 0);

// 원소들의 곱과 합 (reduce)
let sum2 = num_list.reduce((a, b) => {
  return a + b;
}, 0);
let mul2 = num_list.reduce((a, b) => {
  return a * b;
}, 1);
console.log(sum2 ** 2 > mul2 ? 1 : 0);

// 이어 붙인 수 (filter)
num_list = [3, 4, 5, 2, 1];

const odds = num_list.filter((value) => value % 2).join('');
const evens = num_list.filter((value) => value % 2 === 0).join('');
console.log(+odds + +evens);

// 이어 붙인 수 (forEach)
let odd = '';
let even = '';

num_list.forEach((n) => {
  n % 2 ? (odd += n) : (even += n);
});
console.log(+odds + +evens);

// 이어 붙인 수 (reduce)

// function solution(num_list) {
//   const [odds, evens] = num_list.reduce(
//     ([odd, even], n) => n % 2 ? [odd + n, even] : [odd, even + n],
//     ["", ""]
//   );
//
// return +odd + +even;
// }

// 마지막 두 원소 1
num_list2 = [5, 2, 1, 7, 5];

const last = num_list.length - 1;
if (num_list[last] > num_list[last - 1]) {
  num_list.push(num_list[last] - num_list[last - 1]);
} else {
  num_list.push(num_list[last] * 2);
}
console.log(num_list);

// 마지막 두 원소 2 (reverse, 구조분해할당)
const [a2, b2] = [...num_list].reverse();
console.log([...num_list, a2 > b2 ? a2 - b2 : a2 * 2]);

// 마지막 두 원소 3 (slice, 구조분해할당)
const [sec, last2] = num_list.slice(-2);
last2 > sec ? num_list.push(last2 - sec) : num_list.push(last2 * 2);
console.log(num_list);

// 수 조작하기 1
n = 0;
control = 'wsdawsdassw';

for (const ch of control) {
  if (ch === 'w') n += 1;
  else if (ch === 's') n -= 1;
  else if (ch === 'd') n += 10;
  else n -= 10;
}
console.log(n);

// function solution(n, control) {
//   const direction = {
//     w: () => n += 1,
//     s: () => n -= 1,
//     d: () => n += 10,
//     a: () => n -= 10,
//   };

//   for (const ch of control) {
//     direction[ch](); // 함수 실행
//   }
//   return n;
// }

// reduce 사용
// const operations = {
//   w: (n) => n + 1,
//   s: (n) => n - 1,
//   d: (n) => n + 10,
//   a: (n) => n - 10,
// };

// function solution(n, control) {
//   return [...control].reduce((prev, op) => operations[op](prev), n);
// }

// 수 조작하기 2
