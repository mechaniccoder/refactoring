function score(candidate, medicalExam, scoringGuide) {
  return new Scorer().execute(candidate, medicalExam, scoringGuide);
}

class Scorer {
  execute(candidate, medicalExam, scoringGuide) {
    let result = 0;
    let healthLevel = 0;
    let highMediacalRiskFlag = false;

    if (medicalExam.isSmoker) {
      healthLevel += 10;
      highMediacalRiskFlag = true;
    }

    let certificationGrade = "regular";
    if (scoringGuide.stateWithLowCertification(candidate.originState)) {
      certificationGrade = "low";
      healthLevel -= 5;
    }

    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}
