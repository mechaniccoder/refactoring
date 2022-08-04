/**
 * command로 바꾸는 리팩토링이다. 한가지 메서드를 가지는 객체를 만들어서 사용하라는데
 * 무슨 장점이 있는지 애매했다. 아마도 그 함수만을 위한 필드를 생성하거나 state를 추가적으로
 * 클래스 내부에 정의해 사용할 수 있기 때문에 함수의 life cycle이나 부가적인 기능들을
 * 덧 붙일 수 있는 장점이 있지 않을까 하는 개인적인 생각을 해봤다. 근데 필자는 이 명령 리팩토링보다는
 * 일급함수를 사용할 것을 권하고 있다. 아직 실무에서 일급함수를 어떤식으로 활용할 수 있을지 함수형 프로그래밍을
 * 공부중이라 좀 더 내공이 쌓여야 use case에 대해 피부로 와닿을 것 같다.
 */

function score(candidate, medicalEam, scoringGuide) {
  return new Scorer(candidate, medicalEam, scoringGuide).execute()
}

class Scorer {
  constructor(candidate, medicalEam, scoringGuide) {
    this.candidate = candidate
    this.medicalEam = medicalEam
    this.scoringGuide = scoringGuide
  }

  execute() {
    this.result = 0
    this.healthLevel = 0
    this.highmedicalRiskFlag = false

    this.scoreSmoking()
    this.certificationGrade = 'regular'

    if (this.scoringGuide.stateWithLowCertification(this.candidate.originState)) {
      this.certificationGrade = 'low'
      this.result -= 5
    }

    this.result -= Math.max(healthLevel - 5, 0)
    return this.result
  }

  scoreSmoking() {
    if (this.medicalEam.isSmoker) {
      this.healthLevel += 10
      this.highmedicalRiskFlag = true
    }
  }
}
