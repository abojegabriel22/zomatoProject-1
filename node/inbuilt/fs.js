//FS MEANS FILE SYSTEM. it is a package, It is used for doing so many things such as creating file, editing and read a file
//YOU CAN CREATE FILE, READ FILE, AND ALSO DELETE FILES
let fs = require('fs');
//ONE CONCEPT IS CALLED CALLBACK CONCEPT WHILE THE OTHER ONE IS CALLED ASYNC AWAIT CONCEPT
//FS HAS A METHOD
//write file
/*fs.writeFile('myFile.txt','This is My Code Sample 2',function(){
    console.log('File Created')
})
*/

//append child
/*fs.appendFile('myCode.txt','file says hello Aboja 1 \n',()=>{
    console.log('file Appended')
})*/

//read file
fs.readFile('myLoc.json','utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data)
})

// BufferEncoding

//rename
/*fs.rename('myCode.txt','myData.txt',(err)=>{
    if(err) throw err;
    console.log('new file')
})
*/

//delete file
// fs.unlink('myFile.txt',(err)=>{
//     if(err) throw err;
//     console.log("file deleted")
// })
