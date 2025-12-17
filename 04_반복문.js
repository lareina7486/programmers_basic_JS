// 수열과 구간 쿼리 3
arr = [0, 1, 2, 3, 4];
queries = [
  [0, 3],
  [1, 2],
  [1, 4],
];

queries.forEach(([i, j]) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]; // 구조분해 할당
});

console.log(arr);

// 수열과 구간 쿼리 2
arr2 = [0, 1, 2, 4, 3];
queries2 = [
  [0, 4, 2],
  [0, 3, 2],
  [0, 2, 2],
];

let answer = [];

queries2.forEach(([s, e, k]) => {
  const tempArr = arr2
    .slice(s, e + 1)
    .filter(n => n > k);

  answer.push(
    tempArr.length === 0
      ? -1
      : Math.min(...tempArr)
  );
});

console.log(answer);


// 수열과 구간 쿼리 4
// 배열 만들기 2
// 카운트 업
// 콜라츠 수열 만들기
// 배열 만들기 4
