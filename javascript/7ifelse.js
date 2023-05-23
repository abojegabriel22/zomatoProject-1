if(condition){
    //if the condition is true, then this part of code will run
}else{
    //if conditon is false this part of code will run
}


if(condition){
    //if the condition is true, then this part of logic will run
}else if(condition){
   
}else{
    //if condition is false then this part of logic will work
}

var a = 10;
if (a%2==0){
    console.log(`${a} is even`)
}else if(a%3==0){
    console.log(`${a} is divisible`)
}else{
    console.log(`${a} is odd`)
}



var a = 10;
if (a%2==0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}
VM61:3 10 is even
undefined
var a = 15;
if (a%2==0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}
VM70:5 15 is odd
undefined
var a = 10;
if (a%2==0){
    console.log(`${a} is even`)
}else if(a%3==0){
    console.log(`${a} is divisible`)
}else{
    console.log(`${a} is odd`)
}
VM83:3 10 is even
undefined
var a = 15;
if (a%2==0){
    console.log(`${a} is even`)
}else if(a%3==0){
    console.log(`${a} is divisible`)
}else{
    console.log(`${a} is odd`)
}
VM92:5 15 is divisible
undefined
var a = 5;
if (a%2==0){
    console.log(`${a} is even`)
}else if(a%3==0){
    console.log(`${a} is divisible`)
}else{
    console.log(`${a} is odd`)
}
VM103:7 5 is odd


//ternary operator
(single line if else)

condition ? if condition is true : if condition is false

var a = 5
a>10 ? "Hii":"Bye"

var a = 10
a=="10" ? a+80 : a-20


var a = 5
a>10 ? "Hii":"Bye"
'Bye'
var a = 10
a>10 ? "Hii":"Bye"
'Bye'
var a = 50
a>10 ? "Hii":"Bye"
'Hii'
var a = 10
a=="10" ? a++ : a--
10
var a = 10
a=="10" ? a+80 : a-20
90
var a = 10
a==="10" ? a+80 : a-20
-10
var a = 10
a=="10" ? a+80 : a-20
90
var a = 10
a>"10" ? a+80 : a-20
-10