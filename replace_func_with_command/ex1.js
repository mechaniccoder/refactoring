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
    let result = 0;
    let healthLevel = 0;
    let highMediacalRiskFlag = false;

    if (this.medicalExam.isSmoker) {
      healthLevel += 10;
      highMediacalRiskFlag = true;
    }

    let certificationGrade = "regular";
    if (this.scoringGuide.stateWithLowCertification(this.candidate.originState)) {
      certificationGrade = "low";
      healthLevel -= 5;
    }

    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}
