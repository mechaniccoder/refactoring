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
