//Javascript 6

//Contructor review
//Write a constructor function called Person that takes in name, age, and birthday properties.
function Person(name, age, birthday) {
    this.name = name;
    this.age = age;
    this.birthday = birthday;
}
//Attach a prototype method to the Person constructor called introduceSelf.  It should return a string with the person's name and age.
Person.prototype.introduceSelf = function () {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old`)
}
//Create two new people and have them introduce themselves.
const godzilla = new Person('Godzilla', 5000, 'Dawn of time')
const mothra = new Person('Mothra', 420, 'May 16th')

// godzilla.introduceSelf()
// mothra.introduceSelf()
//Classes
//Create a class called Aircraft that takes in name and range, a string and number respectively.  Also initialize a property called milesFlown and set it to 0.  Attach a prototype method called fly that add the range of the aircraft to the milesFlown.  Then return the updated object.

class Aircraft {
    constructor(name, range) {
        this.name = name;
        this.range = range;
        this.milesFlown = 0;
    }
    fly() {
        this.milesFlown += this.range;
        return this
    }
}

//Use your class to create a new Aircraft and invoke fly.
const ufo = new Aircraft('Planet Express', 10)
ufo.fly()

// extends example
class People {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`Hello, I'm ${this.name}`)
    }
}

const adam = new People('Adam')

class Athlete extends People {
    constructor(name, sport) {
        super(name)
        this.sport = sport;
    }
    greet() {
        console.log(`Hello, I'm ${this.name} and I play ${this.sport}`)
    }
}

const andrew = new Athlete('Andrew', 'Overwatch')
// andrew.greet()
// andrew.sayHi()

//Create a new class called Plane that extends aircraft.  It should also take in passengerCount and initialize a passengersFlown property at 0 and a destinations property as an empty array.  Modify the exising fly method to take in a destination parameter, It should add the passengerCount to the passengersFlown and push the destination to the destinations array.  It should  return a string stating 'name has flown passengersFlown passengers a total of milesFlown miles.  It has gone to destinations'.  Make sure all previous functionality of fly is maintained.

class Plane extends Aircraft {
    constructor(name, range, passengerCount) {
        super(name, range);
        this.passengerCount = passengerCount;
        this.passengersFlown = 0;
        this.destinations = []
    }
    fly(destination) {
        this.passengersFlown += this.passengerCount;
        this.destinations.push(destination)
        super.fly()
        return `${this.name} has flown ${this.passengersFlown} a total of ${this.milesFlown} miles. It has gone to ${this.destinations}`
    }
}

const concorde = new Plane('concorde', 600, 42)
// console.log(concorde.fly('Aruba'))
// console.log(concorde.fly('Jamaica'))
// console.log(concorde.fly('Oooo I want to take ya'))

//Use your class to create a new Airplane and make it fly somewhere!

//Create a new class called PrivateJet that extends Plane.  It should also take in an owner property. Modify the existing fly method to instead return 'name has flown owner and passengersFlown friends milesFlown miles.  It has gone to destinations.  Make sure all previous functionality of fly is maintained.

//Use your class to create a new PrivateJet and have it fly wherever you want.

// Closures

//Write a function called secretNumber.  This function should initialize a number variable at 0 and return a function that increments the number variable.

//Use your function to initialize a new instance of num and invoke the returned function to increment it.

//Write a function called someonesNumber that takes in a name paramter.  Initialize a number variable at 0 and return a function that will return the string `name's number is`

//Invoke someonesNumber to create a new instance of num and then invoke that returned function to change the number.  Repeat this process to show that there are two separate instances of num.

//Module Pattern

//Use the module pattern to create a calculator.  It should have functionality to add, subtract, multiply, divide, and clear.



//Example found here: https://youtu.be/RBLIm5LMrmc
class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    register() {
        console.log(`${this.username} with the email ${this.email} is now registered`)
    }
}

let bob = new User("Bob", 'bob@email.com', '12345')
console.log(bob)
bob.register()

class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password)
        this.memberPackage = memberPackage
    }

    getmemberPackage() {
        console.log(`${this.username} is subsribed to the ${this.memberPackage} package`)
    }
}

let mike = new Member('mike', 'mike@email.com', '098765', 'Standard')
mike.getmemberPackage()

// ------------------------------------------------------------------------------------

class Employee {
    constructor(first_name, last_name, email, age) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.age = age;
    }
    makeWidget() {
        console.log(`${this.first_name} ${this.last_name} Widget`)
    }
}

let newEmployee = new Employee("Murray", "Tucker", "murray@email.com", 34)
console.log(newEmployee)
newEmployee.makeWidget()

class Manager extends Employee {
    constructor(first_name, last_name, email, age, reports = []) {
        super(first_name, last_name, email, age)
        this.reports = reports
    }
    hire(employee) {
        this.reports.push(employee)
    }
    fire(index) {
        this.reports.splice(index, 1)
    }
}

let newManager = new Manager('Kels', 'Tuck', 'kelsey@email.com', 33, 'Murray')
console.log(newManager)
Manager.fire()

let newManager2 = new Manager('', 'Tuck', 'kelsey@email.com', 33, 'Murray')
console.log(newManager)



