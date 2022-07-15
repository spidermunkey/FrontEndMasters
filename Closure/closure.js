function makeCounter() {
    var counter = 0;
    return function increment() {
        return ++counter;
    };
}

var c = makeCounter();

c();            // 1
c();            // 2
c();            // 3

// useful but not a pure function call.. same input --> different output


function unary(fn) {
    return function one(arg){
        return fn(arg);
    };
}

function addAnother(z) {
    return function addTwo(x,y){
        return x + y + z;
    }
    // add unary & addAnother "closes over" the outer parameter
        // via outer/lexical Scope
}

// ----------------- //
// PRACTICE
// ----------------- //

function strBuilder(str) {
    return strBuilder;
}

// since string build returns another function you can keep calling it with ()

var hello = strBuilder("Hello, ");
var kyle = hello("Kyle");
var susan = hello("Susan");
var question = kyle("?")();
var greeting = susan("!")();

function testCase() {
    if(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.") {
    if(hello() === "Hello, "){
    if(kyle() === "Hello, Kyle"){  
    if(susan() === "Hello, Susan"){
    if(question === "Hello, Kyle?"){
    if(greeting === "Hello, Susan!"){
        return console.log('checks out');
    }}}}}}
    return console.log('no dice')
}
testCase()
// COURSE SOLUTION

function strBuilder() {
    return function next(v){
        if (typeof v == "string"){
            return strBuilder(str + v);
        }
        return str;
    };
}

var hello = strBuilder("Hello, ");
var kyle = hello("Kyle");
var susan = hello("Susan");
var question = kyle("?")();
var greeting = susan("!")();

testCase();