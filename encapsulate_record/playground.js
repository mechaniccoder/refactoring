const organization = {
  name: "유승환",
  country: "KR",
};

// 1. 먼저 위의 레코드를 캡슐화하자.
function getRawDataOfOrganization() {
  return organization;
}

//  2. 레코드를 클래스로 바꿔보자.
class Organization {
  constructor(data) {
    this._data = data;
  }
}

const organization = new Organization({ name: "유승환", country: "KR" });
function getRawDataOfOrganization() {
  return organization._data;
}
function getOrganization() {
  return organization;
}

class Organization {
  constructor(data) {
    this._data = data;
  }

  // 3. 레코드를 업데이트하는 코드는 setter를 활용한다.
  set name(aString) {
    this._data.name = aString;
  }

  // 레코드를 읽는 코드도 getter를 활용한다.
  get name() {
    return this._data.name;
  }
}

// 4. _data 필드를 펼쳐놓자.
class Organization {
  constructor(data) {
    // 이렇게 하는 장점은 원본 레코드의 참조값의 연결을 끊을 수가 있다.
    this._name = data.name;
    this._country = data.country;
  }

  set name(aString) {
    this._data.name = aString;
  }

  get name() {
    return this._data.name;
  }
  set country(aCountry) {
    this._data.coutnry = aCountry;
  }

  get country() {
    return this._data.country;
  }
}

/**
 *  중첩된 레코드를 캡슐화하는 방법을 살펴보자.
 * */

const user = {
  1994: {
    name: "seunghwan",
    id: "1994",
    usages: {
      2020: {
        1: 50,
        2: 55,
      },
      2021: {
        1: 70,
        2: 63,
      },
    },
  },
  1997: {
    name: "pauler",
    id: "1994",
    usages: {
      2020: {
        1: 50,
        2: 55,
      },
      2021: {
        1: 70,
        2: 63,
      },
    },
  },
};

// depth가 깊은 데이터를 다루기 위해서 다음과 같이 접근해야 한다.
user[customerID].usages[year][month] = amount;
function compareUsage(customerID, laterYear, month) {
  const later = user[customerID].usages[laterYear][month];
  const earlier = user[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

function getRawDataOfUser() {
  return user._data;
}
function setRawDataOfUser(arg) {
  user = arg;
}

// 데이터를 표현하는 클래스를 정의하자.
class UserData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }
}

function setRawDataOfUser(arg) {
  user = new UserData(arg);
}

// 이렇게 정의하면 사용하는 쪽에서 훨씬 더 가독성이 좋다.
getRawDataOfUser().setUsage(customerID, year, month, amount);
