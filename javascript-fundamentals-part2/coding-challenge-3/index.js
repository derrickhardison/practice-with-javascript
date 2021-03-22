const markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmiValue = this.mass / this.height ** 2; //stores the bmiValue to a property. Different from using const =
    return this.bmiValue;
  },
};

const johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmiValue = this.mass / this.height ** 2; //stores the bmiValue to a property. Different from using const =
    return this.bmiValue;
  },
};

// can either calculate BMI here or call methods prior and use the object.bmiValue
johnSmith.calcBMI() > markMiller.calcBMI()
  ? console.log(
      `${johnSmith.fullName}'s BMI (${johnSmith
        .calcBMI()
        .toFixed(2)}) is higher than ${
        markMiller.fullName
      }'s (${markMiller.calcBMI().toFixed(2)})`
    )
  : console.log(
      `${johnSmith.fullName}'s BMI (${johnSmith
        .calcBMI()
        .toFixed(2)}) is lower than ${
        markMiller.fullName
      }'s (${markMiller.calcBMI().toFixed(2)})`
    );
