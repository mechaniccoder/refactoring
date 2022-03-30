// or
function disabilityAmount(anEmployee) {
  if (anEmployee.seniority < 2) return 0;
  if (anEmployee.monthDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;
}

function disabilityAmount(anEmployee) {
  if (isNotEligibleForDisability()) return 0;

  function isNotEligibleForDisability() {
    return anEmployee.seniority < 2 || anEmployee.monthDisabled > 12 || anEmployee.isPartTime;
  }
}

// and
{
  if (anEmplyee.onVacation) {
    if (anEmployee.seniority > 10) {
      return 1;
    }
  }
  return 0.5;
}

{
  if (anEmployee.onVacation && anEmployee.seniority > 10) return 1;
  return 0.5;
}
