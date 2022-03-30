class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

// client
highPriorityCount = orders.filter((o) => o.priority === "hight" || o.priority === "rush").length;

// 데이터를 다루기 전에는 먼저 캡슐화를 해주자.
class Order {
  //...
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = aString;
  }
}

class Priority {
  constructor(value) {
    this._value = value;
  }
  // 독자는 getter를 사용하기 보다는 클라이언트의 관점을 생각했다.
  // 클라이언트의 관점에서 문자열의 필드값을 요청하기 때문이다.
  toString() {
    return this._value;
  }
}

// Order 클래스를 업데이트 해주자.
class Order {
  // ...
  get priority() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

// 클라이언트의 입장에서 사용되는 예를 보자.
hightPriorityCount = orders.filter((o) => o.priority === "high" || o.priority === "rush").length;

// 클라이언트의 입장에서 사용되는 인터페이스를 좀 더 추상화해보자.
hightPriorityCount = orders.filter((o) => o.priority.higherThan(new Priority("normal"))).length;

// 위의 코드처럼 사용하기 위해서는 Priority의 클래스를 수정해줘야 한다.
class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;

    if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error(`[${value}] is invalid for [Priority]`);
    }
  }
  get value() {
    return this._value;
  }
  static legalValues() {
    return ["low", "normal", "hight", "rush"];
  }
  get _index() {
    return Priority.legalValues().findIndex((s) => s === this.value);
  }
  higherThan(other) {
    return this._index > other._index;
  }
}

class Order {
  constructor(data) {
    this._priority = data.priority;
  }
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}
