// COMPOSITION
/*
 When one functions output becomes the input to another function
 

ILLUSTRATION OF REROUTING FUNCTION OUTPUTS TO FUNCTION INPUTS

USING TEMPORARY VARIABLES
----------------------------------------------
function minus2(x) { return x - 2; }
function triple(x) { return x * 3; }
function increment(x) { return x + 1; }

// add shipping rate

var tmp = increment(4);
tmp = triple(tmp);
totalCost = basePrice + minus2(tmp);
----------------------------------------------

USING NESTED FUNCTION CALLS

totalCost = 
    basePrice + 
    minus2(triple(increment(4)))

-----------------------------------------------

USING "SEMANTICALLY SEPARATED" NESTED FUNCTION CALLS

function shippingRate(x) {
    return minus2(triple(increment(x)));
}

totalCost = 
    basePrice +
    shippingRate(4)

------------------------------------------------

USING COMPOSITION UTILITY FUNCTIONS

function composeThree(fn3,fn2,fn1) {
    return function composed(v){
        return fn3(fn2(fn1(v)))
    }
}
var f = composeThree(minus2,triple,increment);
var p = composeThree(increment,triple,minus2);
var g = pipeThree(minus2,triple,increment);

f(4); // 13
p(4); // 7
g(4) // 7
*/


function compose(...fns) {
    // console.log(fns); 
    return function reducer(v) {
     return fns.reduceRight(function invoke(returnValue,currentFunction){
        //  console.log(currentFunction,returnValue)
         return currentFunction(returnValue);
     },v)
    }
}

function composeTwo(fn2,fn1) {
    return function composed(v) {
        return fn2(fn1(v));
    };
}

function composeThree(fn3,fn2,fn1) {
    return function composed(v){
        return fn3(fn2(fn1(v)))
    }
}

function pipe(...fns) { 
    console.log(fns)
    return function reducer(v) {
         return fns.reduce(function invoke(returnValue,currentFunction){
            return currentFunction(returnValue)
        },v)
    }
}
// function compose(...fns) {
//     // takes in callbacks as an arg
//     // spreads them into an array
//     return function composed(v){
//         // takes in one value and uses that as the initial value in our reduce function
//         return fns.reduceRight(function invoke(fn,val){
//             return fn(val);
//             // takes the array of callbacks and calls them with each function as the (currentvalue,initalvalue) => { return the invoked function as the next value}
//         },v);
//     };
// }

// PRACTICE EXERCISE

/*

1) Define a `compose(..)` that takes any number of functions (as
    individual arguments) and composes them right-to-left.

2) Define a `pipe(..)` that takes any number of functions (as
    individual arguments) and composes them left-to-right).

*/
 
function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }
function double(x) { return x * 2; }
function half(x) { return x / 2; }

/*
    USING A FOR LOOP

function compose(...fns){
    return pipe(...fns.reverse());
}

function pipe(...fns) {
    return function piped(v){
        for (let fn of fns) {
            v = fn(v)
        }
        return v;
    }
}

*/
var f1 = compose(increment,decrement);
var f2 = pipe(decrement,increment);
var f3 = compose(decrement,double,increment,half);
var f4 = pipe(half,increment,double,decrement);
var f5 = compose(increment);
var f6 = pipe(increment);

console.log( f1(3) === 3 );
console.log( f1(3) === f2(3) );
console.log( f3(3) === 4 );
console.log( f3(3) === f4(3) );
console.log( f5(3) === 4 );
console.log( f5(3) === f6(3) );