describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 68, height: 153});
  });

  it("should have a weight of 68", function() {
    expect(person.weight).toEqual(68);
  });

  it("should have a height of 153", function() {
    expect(person.height).toEqual(153);
  });

  it("should calculate BMI value", function() {
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(29.05)
  });

  it("should have a BMI message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Overweight")
  });

});
