##7/15/22
#MEMOIZATION
I can save resources/memory/speed in my current project where
when a new tab is clicked the model returns a new array every time and builds a dom object from it.

Where instead I can use memoization to cach the results in the function call
of each DOM object that must be built.
So instead of using a document fragment that is garbage collected with every use
I can build strings and cache them by way of closures;

--> so if I have a function that builds something from an array.
--> and I know the different ways they can by called.
--> I can create a memoization function that closes over and caches those.

#CURRYING
Currying can be used by adding() onto a function that you expect to return
another function... basically when this function comes back call it with this()
and when that function comes back call it with that()
EXAMPLE:
------------------------
fn() {
    return f(){
        return faargs(){};
    }
}
fn()()
----------------------
ALTERNATIVE:
------------------------
FN() {
    return F(){
        return faargs(){}
    }
}
var a = FN(ARG);
var b = a(ARG2);
----------------------
UTILITY:
--------------------------
// var fn = a => b => c => { .. };
// var fn = a => (b => (c => { .. }))
var fn = curry(
    3,
    function fn(a,b,c){}
);
