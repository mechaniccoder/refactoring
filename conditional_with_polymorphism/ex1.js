function plumages(birds) {
  return new Map(birds.map((b) => [b.name, plumage(b)]));
}

function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  switch (bird.type) {
    case "유럽 제비":
      return "보통이다.";
    case "아프리카 제비":
      return bird.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
    case "노르웨이 파랑 애무":
      return bird.voltage > 100 ? "그을렸다." : "예쁘다";
    default:
      return "알 수 없다.";
  }
}

function airSpeedVelocity(bird) {
  switch (bird.type) {
    case "유럽 제비":
      return 35;
    case "아프리카 제비":
      return 40 - 2 * bird.numberOfCoconuts;
    case "노르웨이 파랑 애무":
      return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    default:
      return null;
  }
}

function plumage(bird) {
  return new Bird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return new Bird(bird).airSpeedVelocity;
}

class Bird {
  constructor(aBird) {
    Object.assign(this, aBird);
  }

  get plumage() {
    switch (this.type) {
      case "유럽 제비":
        return "보통이다.";
      case "아프리카 제비":
        return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
      case "노르웨이 파랑 애무":
        return this.voltage > 100 ? "그을렸다." : "예쁘다";
      default:
        return "알 수 없다.";
    }
  }

  get airSpeedVelocity() {
    switch (this.type) {
      case "유럽 제비":
        return 35;
      case "아프리카 제비":
        return 40 - 2 * this.numberOfCoconuts;
      case "노르웨이 파랑 애무":
        return this.isNailed ? 0 : 10 + this.voltage / 10;
      default:
        return null;
    }
  }
}

// 종별 서브클래스를 만들자. 팩토리 함수도 만들어주자.
function plumage(bird) {
  return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
  switch (bird.type) {
    case "유럽 제비":
      return new EuropeanSwallow(bird);
    case "아프리카 제비":
      return new AfricanSwallow(bird);
    case "노르웨이 파랑 애무":
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

class EuropeanSwallow extends Bird {}
class AfricanSwallow extends Bird {}
class NorwegianBlueParrot extends Bird {}

function plumages(birds) {
  return birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage]);
}

function speeds(birds) {
  return birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.airSpeedVelocity]);
}
