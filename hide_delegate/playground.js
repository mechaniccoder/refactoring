/**
 * 이번 시간에는 클라이언트로부터 위임 객체를 숨기는 리팩토링 기법에 대해서 알아보자.
 * 이 위임 객체가 클라이언트로 외부에 노출되면, 인터페이스가 바뀔때 모든 클라이언트에서 코드를 수정해야 하지만,
 * 서버로 캡슐화를 해주면, 서버에서만 수정해주면 되기 때문에 유지 보수에 큰 효과를 준다.
 */

class Person {
  constructor(name) {
    this._name = name;
    this._department = new Department();
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  set departmnet(arg) {
    this._department = arg;
  }
}

class Department {
  get chargeCode() {
    return this._chargeCode;
  }
  set chargeCode(arg) {
    this._chargeCode = arg;
  }
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

// 위임 객체가 외부로 노출됐을때는 아래와 같이 객체가 노출된다.
manager = aPerson.department.manager;

// 위임 객체를 캡슐화해주자.
class Person {
  constructor(name) {
    this._name = name;
    this._department = new Department();
  }
  // 위임 메서드를 만들어서 캡슐화 하자.
  get manager() {
    return this._department.manager;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  set departmnet(arg) {
    this._department = arg;
  }
}

// 클라이언트로부터 위임객체가 캡슐화되었다.
maanger = aPerson.manager;

module.exports = {};
