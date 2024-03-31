// >>>>> An array is a special variable, which can hold more than one value at a time.
// >>>>> Unlike in other programming languages, in JavaScript, arrays can hold different types of values at the same time.
// >>>>> array are mutable that means we can change the value of array elements.
// >>>>> typeof array will return object.
let array = [3, 5, 29, 19, true, "Narendra"];
console.log(array);

for(let i = 0; i< array.length; i++){
    console.log(array[i]);
}

array[0] = false; // change the value first element of array from 3 to false
console.log(array);

