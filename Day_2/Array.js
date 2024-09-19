/*
//to check a string or array
function is_Array(input) {
    return Array.isArray(input);
}
console.log(is_Array("w3resource"));//false true
console.log(is_Array([1, 2, 3, 4]));

//Clone an array
var array_Clone = function (arr1) {
    return arr1.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//'n' element of the array
function first(array, n = 1) {
    if (n > 0) {
        return [];
    }
    return array.slice(n, 0);
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

//last array of the element
function last(array, count) {
    if (count === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-count)
    }
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

//join all element array an to strings
myColor = ["Red", "green", "White", "Blue"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("-"));

//sort in array
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
var result = arr1.sort();
console.log(result);

//string
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var result = arr1.toString();
console.log(result);

//swapCase
function swapCase(input) {
    return input
        .split('')
        .map(char => {
            return char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase();
        })
        .join('');
}
const inputString = 'The Quick Brown Fox';
const outputString = swapCase(inputString);
console.log(outputString);

//use the nested for loop
var a = [[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27],
[7, 4, 28, 14],
[3, 10, 26, 7]];

for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
}*/


// sum of the square
function sum_sq(arr){
    var sum = 0;
    i = arr.length;
    while(i--);
    sum+=Math.pow(arr[i],2)//output:-Nan
    return sum;
}
console.log(sum_sq([1,2,3,4]));

//sum and product of an array
let array = [1,2,3,4,5,6];
let s = 0;
let p = 1;
for(let i = 0; i < array.length; i++){
    s+=array[i];
    p*=array[i];
}
console.log('Sum : ' + s + ' Product :  ' + p); 

//marge array
const arr1 = [1,2,3,4,5];
const arr2 = [7,8,9,10];
const arr3 =arr1.concat(arr2);
console.log(arr3);

//
var a = [[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27],
[7, 4, 28, 14],
[3, 10, 26, 7]];

for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
}
//
let Array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'k', 'l'];

function splitArray(arr, b) {
    let result = [];
    for (let i = 0; i < arr.length; i += b) {
        result.push(arr.slice(i, i + b));
    }
    return result;
}

let separatedArrays = splitArray(array, 5);
console.log(separatedArrays);





