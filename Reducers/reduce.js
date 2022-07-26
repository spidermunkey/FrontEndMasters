// ----------------------------------- //
// REDUCE //
// --------------------- //

//  HOW IT WORKS

/*
    ** Reduce combines values (generally speaking)
    ** Makes a decision based on the current running accumulator... as well as the next value
    ** It combines the current value of the running acumulator with the next value in our collection
    ** Uses a reducer function to decide how to combine the running accumulator with the next value 
    ** Assuming you never want to mutate data coming in that you don't own... we can make reducers to make copies without mutation
    
    --> Start with a collection of values && some initial value that is appropriate for the list of values
    ex: add [1,2,3]... start with 0 || multiply/divide [1,2,3].... start with 1 || concat ["a","b","c"].... start with "" || [...promises].... start with a resolved promise || [...functions].... start with fn(identity)
    
    --> Map && Filter can work with reduce
    ex: if at each operation we have an accumulator and a value... and my accumulator is a new list that starts out empty.. we can call the function(map) and place that value in. the end result is a new list that has been mapped
    ex: if we have an if statement with a predicate... and we only put stuff in if the predicate says so.. we end up with a filtered list

    {
        function addToRecord(record,[key,value]) {
            return { ...record, [key]: value };
            // takes in a list of records and returns an object with previous values while adding a new property from an expected tuple as a parameter
        }

        function reduce(reducer,initialVal,arr) {
            var ret = initialVal;
            for (let elem of arr) {
                ret = reducer(ret,elem);
            }
            return ret;
            // takes in a reducer function, initial value, and an array;
            // creates a variable to store the intial value
            // loops over the array
            // sets the value of the intial value to whatever the reducer function returns from intialVal and Each element in the array
        }
    }

    reduce(addToRecord,{},[
        ["name","kyle"],
        ["age"], 39],
        ["isTeacher", true],
    ])

    // calls addToRecord for each element in our array of tuples
    // addToRecord returns a new object with the initial value spread into it. 
    // it then creates a new key/value pair inside of the new object from our array of tuples
    // so for each element.... since we know its a list of tuples representing records...
    // we can create a [key --> value] pair from the tuple and add it into a new array with previously created values stored into it.
    // this creates an object from a list without mutatation

    // WITH ARRAY METHODS
    function addToRecord(record,[key,value]) {
        return {...record, [key]: value };
    }

    [
        ["name", "Kyle"],
        ["age", 39],
        ["isTeacher", true]
    ].reduce(addToRecord,{});

    function add1(v) { return v + 1; }
    function mul2(v) { return v * 2; }
    function div3(v) { return v / 3; }

    function composeTwo(fn2,fn1) {
        return function composed(v){
            return fn2(fn1(v));
        };
    }

    var f = [div3,mul2,add1].reduce(composeTwo);
    var p = [add1,mul2,div3].reduceRight(composeTwo);

    */