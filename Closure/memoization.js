// REFERENCIAL TRANSPARENCY
// WHAT IF WE ONLY WANT TO DO THE WORK WHEN ITS ASKED FOR
// THEN WE REPLACE THE FUNCTION CALL WITH THE RETURN VALUE OF THE FUNCTION
// RESULTING IN A PURE FUNCTION CALL
/*

EAGER
function repeater(count) {
    var str = "".padStart(count,"A"); <--- WORK STARTS HERE WHEN FUNCTION IS INVOKED on Line 14 then again, and again with the closed over count variable
    return function allTheAs(){
        return str;
    };
}

var A = repeater(10);

A(); 
A(); 

LAZY.. IMPURE...(mutated variables)
function repeater(count) {
    var str;
    return function allTheAs() {
        if (str == undefined) {
            str = "".padStart(count,"A"); <----- WORK STARTS HERE BUT SAVES THAT TO THE STR VARIABLE SO THAT THE WORK IS ONLY DONE ONCE AND THE ONLY JOB IS TO RETURN THE VARIBALE IF ITS SET
        }
        return str;
    };
}

LAZY.. MEMOIZED... (Cached output)
function repeater(count) {
    return memoize(function allTheAs() {
        return "".padStart(count,"A");
    });
}
*/