for
while
do while 
for of >> Array
for in  >> object


// 
// >iterate over the array and can also generate the series of value 

for(i=0;i<5;i++){
    console.log(i)
}
 0
 1
 2
 3
 4

 for(i=0;i<a.length;i++){
    console.log(a[i])
 }

 var a = ['Jos', 'Abeokuta', 'Zamfara', 'Sokoto', 'Kaduna', 'Niger']
undefined
a
(6) ['Jos', 'Abeokuta', 'Zamfara', 'Sokoto', 'Kaduna', 'Niger']
 for(i=0;i<a.length();i++){
    console.log(a[i])
 }
 for(i=0;i<a.length;i++){
    console.log(a[i])
 }
Jos
Abeokuta
Zamfara
Sokoto
Kaduna
Niger
/////////////////////////////////////
//this will first check the condition before it will run
var i = 0
while(i<5){
console.log(i)
i++
}
0
1
2
3
4


var i = 10
while(i<5){
console.log(i)
i++
}
undefined

////do while it first print then it match the condition
var i = 10
do{
    console.log(i)
    i++
}
while(i<5)
10

var a = ['Jos', 'Abeokuta', 'Zamfara', 'Sokoto', 'Kaduna', 'Niger']
for(i of a){
   console.log(i)
}
Jos
Abeokuta
Zamfara
Sokoto
Kaduna
Niger