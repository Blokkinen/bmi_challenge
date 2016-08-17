describe("BMIcalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {

    calculator = new BMIcalculator();
  });

  it ("calculates BMI for a person using metric method", function() {
    person = new Person({weight: 68, height: 153});
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(29.05);
  });

  it ("calculates BMI for a person using imperial method", function() {
    person = new Person({weight: 149.9, height: 60.23})
    calculator.imperial_bmi(person);
    expect(person.bmiValue).toEqual(29.05);
  });

});
