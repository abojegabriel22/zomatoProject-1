// ENCLOSE SOMETHING
// GLOBAL SCOPE 
// LOCAL SCOPE 
/*var a = 10
function add(){
    var b = 20
    return a+b
}
console.log(">>>>>>>add",add())
console.log(">>>>>>>a",a)
console.log(">>>>>>>",b)    */

// >>>>>>>add 30
// >>>>>>>a 10
// C:\Users\Acer\Desktop\zomatoProject-1\javascript\23clouser.js:11
// console.log(">>>>>>>",b)
// ReferenceError: b is not defined

var a = 10
for(i=0;i<5;i++){
    var b = 20
    console.log(a+b+i)
}
30
31
32
33
34

console.log(">>>>>>>a",a)
console.log(">>>>>>>",b) 
>>>>>>>a 10
>>>>>>> 20


var a = 10
for(i=0;i<5;i++){
    let b = 20
    console.log(a+b+i)
}

console.log(">>>>>>>a",a)
console.log(">>>>>>>",b) 

30
31
32
33
34
>>>>>>>a 10
Uncaught ReferenceError: b is not defined
 
// BY DEFAULT VAR HAS A FUNCTIONAL SCOPE. its able to restrict the value inside the function. but for loop is accessible.
// LET AND CONST HAS A BLOCK SCOPE. anything that is declared in a curely brackets cannot be accessble else where outside the curly brackets.
