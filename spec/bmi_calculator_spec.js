describe("BMIcalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 68, height: 153});
    calculator = new BMIcalculator();
  });

  it ("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(29.05);
  });



});
