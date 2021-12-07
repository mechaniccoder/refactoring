function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this.candidate = candidate;
    this.medicalExam = medicalExam;
    this.scoringGuide = scoringGuide;
  }

  execute() {
    this.result = 0;
    this.healthLevel = 0;
    this.highMediacalRiskFlag = false;

    this.scoreSmoke();
    this.certificationGrade = "regular";
    if (this.scoringGuide.stateWithLowCertification(this.candidate.originState)) {
      this.certificationGrade = "low";
      this.healthLevel -= 5;
    }

    this.result -= Math.max(healthLevel - 5, 0);
    return result;
  }

  scoreSmoke() {
    if (this.medicalExam.isSmoker) {
      this.healthLevel += 10;
      this.highMediacalRiskFlag = true;
    }
  }
}
