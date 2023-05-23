>Map
>Map helps to iterate over the Array
>It always return the same length of output as input Array
>It is used to apply the logic

var a = [2,4,12,5,29,7]
a.map(()=>{})

a.map((data) => {return data*2})


var a = [2,4,12,5,29,7]
undefined
a.map((data) => {return `<p>${data*2}</p>`})
[4, 8, 24, 10, 58, 14]

var a = [2,4,12,5,29,7]
undefined
a.map((data) => {return `<p>${data*2}</p>`})
['<p>4</p>', '<p>8</p>', '<p>24</p>', '<p>10</p>', '<p>58</p>', '<p>14</p>']

File
>helps to filter out values
>It may or may not return the same length of output as input
>It only returns those values for which your output or condition is true

var a = [2,4,12,5,29,7]

a.filter((data) => {return data > 10})
[12, 29]

a.map((data) => {return data > 10})
[false, false, true, false, true, false]

var a = [1,2,3]
undefined
a.map((data) => {return data*2})
[2, 4, 6]
a.filter((data) => {return data*2})
([1, 2, 3]

var a = [0,3,1,5]
undefined
a.filter((data) => {return data*2})
[3, 1, 5]