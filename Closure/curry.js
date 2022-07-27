// Currying vs Partial Application

// 1. Both are specialized techniques
// 2. Partial Application presets some arguements now, receives the rest on the next call
// 3. Currying doesn't preset any arguements, receives each arguement one at a time

/*

Function Parameter Order
General ---> Specific
Ex: Map(cb,arr)

*/

/*

---PARTIAL APPLICATION---

function ajax(url,data,cb) { .. }

var getCustomer = partial(ajax, CUSTOMER_API);
// var getCurrentUser = partial(ajax,CUSTOMER_API,{id:42});
var getCurrentUser = partial(getCustomer,{id:42});

getCustomer({id:42},renderCustomer);

getCurrentUser(renderCustomer);

------------------------------------------------

---MANUAL CURRY 1---

function ajax(url){
    return function getData(data){
        return function getCB(cb){ .. };
    }
}

ajax(CUSTOMER_API)({id:42})(renderCustomer)

var getCustomer = ajax(CUSTOMER_API);
var getCurrentUser = getCustomer({id:42});

---------------------------------------------------

---CURRY UTILITY--

// var ajax = url => data => cb => { .. };
// var ajax = url => (data => (cb => { .. }));
var ajax = curry(
    3,
    function ajax(url,data,cb){ .. }
);
var getCustomer = ajax(CUSTOMER_API);
var getCurrentUser = getCustomer({id:42});

----------------------------------------------------

--CURRY UTILITY--FROM SCATCH--

*/

const add = (x, y) => x + y

const curry = f => 
    x => y => f(x, y)

const curriedAdd = curry(add);

const increment = add(1)

const split = curry((delimeter,string) => string.split(delimeter))
const words = split(' ');


