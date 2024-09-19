/*function humanize_format(num){
    if(num===undefined)
        return ' ';
    const suffixes = ['th','st','nd', 'rd'];
    const remainder = num%100;
    let suffix= suffixes[0];
    if(remainder>=11&&remainder<=13){
        suffix=suffixes[0];
    }
    else{
        suffix=suffixes[remainder%10]||suffixes[0];
    }
    return num+suffix;
}
console.log(humanize_format());// output
console.log(humanize_format(1));// 1st
console.log(humanize_format(8));// 8th
console.log(humanize_format(301));// 301st
console.log(humanize_format(402));// 402nd


//truncate method
function string_chop(str,size=1){
const a=[];
for(let i=0;i<str.lenght;i++){   //no result
    a.push(str.slice(1 ,1+size));
}
return a;
}
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));


//substr method()
let string = "javascript"
console.log(string.substr(4,6))//script
let name = 'southAfrica';      // africa
console.log(name.substr(5,9))


//question:35 replace method()
function strip_html_tags(str){
    return str.replace(/<[^>]*>/g, ' ');  //PHP Excercies
}
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));

//compare to 2 string
function compare_strings(str1,str2){
    var areEqual = str1.toLowerCase()===str2.toLowerCase();// true/false
    return areEqual;
}
console.log(compare_strings('abcd', 'Abcd'));
console.log(compare_strings('ABCD', 'Abce'));

//uncapitalize to string
function unCapitalize_Words(str1){
    return str1.charAt(0).toLowerCase()+str1.slice(1);
}
console.log(unCapitalize_Words('Js String Exercises'));  //js string exercises

//first latter in each string small
function unCapitalize_Words(str) {
    return str.toLowerCase();
}
console.log(unCapitalize_Words('Js String Exercises'));


function isUpperCaseAt(str1,index){
    return str1.charAt(index).toUpperCase() === str1.charAt(index);//false
}
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));


function isLowerCaseAt(str, index) {
    return str.charAt(index).toLowerCase() === str.charAt(index);//true
}
console.log(isLowerCaseAt('Js STRING EXERCISES', 1));

// used of the array
dataCamelize = ["Hello", "word"];
console.log(dataCamelize.toString());
console.log(dataCamelize.join('-'));
console.log(dataCamelize.join('_'));


//repeat function
function repeat(str, n = 1) {
    return str.repeat(n);
}
console.log(repeat('Ha!'));      // "Ha!"
console.log(repeat('Ha !', 2));   // "Ha!Ha!"
console.log(repeat('Ha!', 3));*/   // "Ha!Ha!Ha!"



//conditional statement
let time = 15;
if (time <= 12) {
    console.log("Good morning");
} else if (time <= 14) {
    console.log("Good arternoon");
} else {
    console.log("Good evening");
}

//
let age = 21;
if (age >= 20) {
    console.log("give the vote in goverment");
} else {
    console.log("give the vote not to goverment");
}

//
let num = 0;
if (num > 0) {
    console.log("number is positive");
} else if (num < 0) {
    console.log("number is nagetive ");
} else {
    console.log("number is zero");
}

//
let marks = 85;
let branchs;
switch (true) {
    case marks >= 90:
        branchs = "computer science";
        break;
    case marks >= 80: branchs = "machanical engineering";
        break;
    case marks >= 70: branchs = "civil engineering";
        break;
    case marks >= 60: branchs = "electric engineering";
        break;
    case marks >= 50: branchs = "bio technology";
        break;
}

console.log(`Student Branch name is : ${branchs}`);

//ternary operator

let result = 
    (age >= 18) ? "You are eligible to vote."
        : "You are not eligible to vote.";

console.log(result);

//
let weather = "sunny";
let temperature = 24;
if(weather==="sunny"){
    console.log("it is sunny");
}else if(temperature>30){
    console.log("it is warn up");
}else{
    console.log("weather");
}
