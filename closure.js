// Closure : 
// 1. Function within a function
// 2. Inner function returned from outer function


// Outer function scope enclosing the inner function (function within a function)
function outer() {
    // outer has one local variable
    var num = 1;
    function inner() {
        // inner can access outer's local variables because of scope
        // inner modifies num and returns the new value.
        num++;
        console.log(`current value of num: `, num);
    }
    // outer returns inner
    // NOTE: inner was not invoked.
    return inner;
}

// console.log(outer())

// what is the value of closure? 
var closure1 = outer();
var closure2 = outer();
var chocolateIceCream = outer();

// Since closure1 is a function, we can invoke it.
// closure1()

// What happens if we invoke closure1 multiple times?
// closure1();
// closure1();
// closure1();
// closure1();
// closure2();
// chocolateIceCream();
// chocolateIceCream();
// chocolateIceCream();
// chocolateIceCream();


// the closure retains a reference to any local variables in the parent function's scope.

function orderCreator() {
    let listOfIngredients = [];
    function addIngredient(...ing) {
        listOfIngredients.push(...ing)
        console.log('List: ', listOfIngredients)
    }
    return addIngredient
}

let nitinSandwich = orderCreator()
nitinSandwich('extra mayo', 'doritos', 'pickles', 'cottage cheese', 'cheese whiz')

let johnSandwich = orderCreator()
johnSandwich('bacon')
johnSandwich('lettuce')
johnSandwich('tomato')


// MODULE PATTERN
// public and private methods & variables
// shields parts of our code from the global scope

function modulePattern() {
    // variables and functions here are private and are only accessed through the public functions in the returned object
    var privateVariable = 'I am private';

    var privateFunction = function () {
        console.log(privateVariable)
    }

    return {
        // everything returned is public
        changeVar: function (str) {
            privateVariable = str;
        },
        readVar: function () {
            privateFunction();
        }
    }
}

// object with public methods stored in module1
var module1 = modulePattern();
// console.log(module1)
// module1.readVar()
// module1.changeVar('changing private var through public method');
// module1.readVar()

// add, subtract, mult, divide
function calculatorCreator() {
    let startVal = 0;
    return {
        add: function (val) {
            return startVal += val
        },
        substract: function (val) {
            return startVal -= val
        },
        mult: function (val) {
            return startVal *= val
        },
        divide: function (val) {
            return startVal /= val
        }

    }
}

const calculon = calculatorCreator()
// console.log(calculon)

calculon.add(1)
calculon.add(33)
calculon.substract(22)
calculon.mult(12)
calculon.divide(6)

// let calc = calculatorCreator()
// calc.add(12)





