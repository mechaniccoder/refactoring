// 참조를 값으로 다룬다는 의미는 기존의 객체에서 속성만을 수정하는 것이 아닌 중첩 객체를 표현하는 필드를 수정할때 객체의 참조값 자체를 대체한다는 의미이다.
class Person {
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
  }
}

class TelephoneNumber {
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }
}

module.exports = {};
