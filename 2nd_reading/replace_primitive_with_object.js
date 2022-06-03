class Order {
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {
    return this._priority;
  }

  get priorityString() {
    return this._priority.toString()
  }

  set priorityString(value) {
    this._priority = new Priority(value)
  }
}

class Priority {
  constructor(value) {
    this._value = value;
  }

  toString() {
    return this._value;
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush']
  }

  get _index() {
    return Priority.legalValues().indexOf(this._value)
  }

  equals(other) {
    return this._index === other._index;
  }

  higherThan(other) {
    return this._index > other._index;
  }
  lowerThan(other) {
    return this._index < other._index;
  }
}

// client
const highPriority = orders.filter(o => o.priority.higherThan(new Priority('normal'))).length
