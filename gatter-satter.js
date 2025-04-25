class persion {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Getter for the Name
  get name() {
    return this.name;
  }
  //Setter fot Name
  set name(newName) {
    this.name = newName;
  }
	// getter for the age
	get age()
	{
	return this.age
	}
	// settter of the Age
	get age(NewAge)
	{
		if (NewAge < 0) [
			console.log("age can not be nagative ")

		]
		else {
			this.age = NewAge
		}
	}
}

// usage
const person = new person("Shubham ", 21);
console.log(persion.name);
console.log(persion.age);
// usage the  getter and satter
person.name = "BOB"
console.log(persion.name);
person.age = 30
console.log(persion.age);
// try the getter and satter in negative age
person.age = -6
console.log(persion.age);
