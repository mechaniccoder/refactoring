/**
 *  클래스를 처음 작성할때는 역할과 책임을 명확하게 수행하지만, 코드가 변경되면서 여러가지 메서드들이 추가되며 매우 비대해진다.
 *  역할도 덧 씌어지고 말이다. 그럴때는 클래스 추출하기 리팩토링 기법을 활용해서 분리하자.
 */

class Person {
  constructor(data) {
    this._name = data.name;
    this._officeAreaCode = data.officeAreaCode;
    this._officeNumber = data.officeNumber;
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return `${this.officeAreaCode} ${this.officeNumber}`;
  }
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._officeNumber;
  }
  set officeNumber(arg) {
    this._officeNumber = arg;
  }
}

// 전화번호 관련 오퍼레이션을 클래스로 추출해보자.
class TelephoneNumber {
  constructor(data) {
    this._officeAreaCode = data.officeAreaCode;
    this._officeNumber = data.officeNumber;
  }
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._officeNumber;
  }
  set officeNumber(arg) {
    this._officeNumber = arg;
  }
  get telephoneNumber() {
    return `${this.officeAreaCode} ${this.officeNumber}`;
  }
}

class Person {
  constructor(data) {
    this._name = data.name;
    this._telephoneNumber = new TelephoneNumber();
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return this._telephoneNumber.telephoneNumber();
  }
  get officeAreaCode() {
    return this._telephoneNumber.officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._telephoneNumber._officeNumber;
  }
  set officeNumber(arg) {
    this._telephoneNumber._officeNumber = arg;
  }
}

// 메서드 이름을 간소화해주자.

class TelephoneNumber {
  constructor(data) {
    this._areaCode = data.areaCode;
    this._number = data.number;
  }
  get areaCode() {
    return this._areaCode;
  }
  set officeAreaCode(arg) {
    this._areaCode = arg;
  }
  get officeNumber() {
    return this._number;
  }
  set officeNumber(arg) {
    this._number = arg;
  }
  get toString() {
    return `${this.areaCode} ${this.number}`;
  }
}

class Person {
  constructor(data) {
    this._name = data.name;
    this._telephoneNumber = new TelephoneNumber();
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
  }
}
