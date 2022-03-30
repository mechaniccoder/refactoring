// 변수 캡슐화하기
// 가변데이터의 경우는 모든 곳에서 한 번에 바꿔줘야 하기 때문에
// 리팩토링의 난이도가 상당히 어렵다.
// 접근할 수 있는 가시성을 함수로 제한한다.

let defaultOwner = {
  firstName: "martin",
  lastName: "faula",
};

class Person {
  constructor(data) {
    this._firstname = data.firstName;
    this._lastname = data.lastName;
  }

  get lastName() {
    return this._lastname;
  }

  get firstName() {
    return this._firstname;
  }
}

function getDefaultOwner() {
  return (
    defaultOwner || Object.assign({}, defaultOwner) || new Person(defaultOwner)
  );
  // 1. 가변데이터의 훼손을 막기위해 객체를 복사하거나
  // 2. 레코드 캡슐화를 활용해서 대입 연산을 무시한다.
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
}

const spaceship = {};

spaceship.owner = getDefaultOwner();
setDefaultOwner({
  firstName: "leveca",
  lastName: "pasn",
});

const owner1 = getDefaultOwner();

module.exports = {};
