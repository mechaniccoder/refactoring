let youngest = people[0] ? people[0].age : Infinity;
let totalSalary = 0;
for (const p of people) {
  if (p.age < youngest) youngest = p.age;
  totalSalary += p.salary;
}
return `최연소: ${youngest}, 총 급여: ${totalSalary}`;

// 반복문안에서의 오퍼레이션을 분리하자.
let youngest = people[0] ? people[0].age : Infinity;
let totalSalary = 0;
for (const p of people) {
  if (p.age < youngest) youngest = p.age;
}
for (const p of people) {
  totalSalary += p.salary;
}
return `최연소: ${youngest}, 총 급여: ${totalSalary}`;

// 함수 추출하기를 적용하면 코드를 더 깔끔히 작성할 수 있다.
return `최연소: ${youngestAge()}, 총 급여: ${totalSalary()}`;

function youngestAge() {
  let youngest = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
  }
  return youngest;
}

function totalSalary() {
  let totalSalary = 0;
  for (const p of people) {
    totalSalary += p.salary;
  }
  return totalSalary;
}

// 알고리즘 교체하기 리팩토링을 적용하면 더욱 깔끔히 작성할 수 있다.
function youngestAge() {
  return Math.min(...people.map((p) => p.age));
}

function totalSalary() {
  return people.reduce((total, p) => total + p.salary, 0);
}
