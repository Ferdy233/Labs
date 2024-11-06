function Capitalize(str) {
    if (!str) return "";
    let arrayIndex = str.split("");
    let newBorn = arrayIndex[0].toUpperCase();
    let newStr = arrayIndex.slice(1).join("");
    return newBorn + newStr;
}

function reverse(str) {
    if (!str) return "";
    return str.split("").reverse().join("");
}

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return reversed === str;
}

function wordCount(str) {
    return str.length;
}

function double(arr) {
    return arr.map(num => num * 2);
}


function filterEven(arr) {
    return arr.filter(num => num % 2 !== 0);
}


function sum(arr){
    let result=0;
    for(let i=0;i<arr.length;i++){
           result += arr[i];
    }
    return result;
}

function average(arr){
    let result=0;

    for(let i=0;i<arr.length;i++){
        result += arr[i];
           }
return result/arr.length;
}

function filterOdd(arr) {
    return arr.filter(num => num % 2 == 0);
}


function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

function isAdult(person) {
    return person.age >= 18;
}

function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}

function compose(...fns) {
    return (arg) => fns.reduceRight((acc, fn) => fn(acc), arg);
}

const CapitalizeAndReverse = compose(reverse, Capitalize);
console.log(CapitalizeAndReverse("hello")); 

const filterAndDouble = compose(double, filterOdd);
console.log(filterAndDouble([2, 3, 4, 5, 6, 7, 8])); 

