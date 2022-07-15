// LAZY EXECUTION
function repeater(count) {
    return function AllTheAs(){
        return "".padStart(count,"A");
    };
}

var A = repeater(10);

A();        //"AAAAAAAAAA"
A();        //"AAAAAAAAAA"

// var A --> returns a calls repeater that closes over the count parameter
// --> then returns a function that pads the start of an empty string with the count passed x "A"
// --> when A() is called it saves the result of AlltheAs being executed
// --> then returns the result of padStart(10,"A")

// LAZY/DEFERRED
// line 10 the string is constructed -- rather than line 8;
// the work of constructing the string is deferred to declaring/defining the function variable on line 2
// only on line 10 is it actually executed
    // UPSIDE if this where computationaly expensive
    // --> deferring the work ensures that the function is called only when needed
    // DOWNSIDE
    // --> if the work is actually needed you must do it every single time


// EAGER EXECUTION
function repeater(count) {
    var str = "".padStart(count, "A");
    return function AllTheAs() {
        return str;
    }
}

var A = repeater(10);

A();        //"AAAAAAAAAA"
A();        //"AAAAAAAAAA"

// In this example when var A is defined as the function declaration/definition of repeater with 10 as the parameter
// --> when A() is executed on line 38 var str = "AAAAAAAAAA" is returned and closed over by repeater;
// --> so if A() is called several times repeaters value in memory is still "AAAAAAAAAA" 
// DOWNSIDE if the work isn't actually needed, uneccessary work will still be done;

// MEMOIZATION
function repeater(count) {
    var str;
    return function allTheAs(){
        if (str == undefined){
            str = "".padStart(count,"A");
            }
        return str;
    };
}

function repeater(count) {
    return memoize(function allTheAs(){
        return "".padStart(count,"A");
    });
}