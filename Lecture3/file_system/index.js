const fs = require('fs');

// console.log(fs);

// CRUD
//
// WRITE
//
// let data = "print('Hello World')"
//
// fs.writeFile('main.py', data, {
//   flag: 'w',
//   encoding: 'utf-8'
// }, (err,res)=>{
//   if(err) throw err;
//   else {
//       console.log("FIle written successfully")
//     }
// })
//
// let data2 = "Kuch bhi ho jata hai?"
//
// fs.writeFileSync('sam.txt',data2,{})
//
//

// READ

// fs.readFile('sam.txt', {encoding: 'utf-8'}, (err,result) => {
fs.readFile('sam.txt', {},(err,result) => {
  if(err) throw err;
  else {
      console.log(result.toString())
    }
})


const result = fs.readFileSync('sam.txt',{encoding:'utf-8'})
console.log(1)
console.log(result)


// appendFile (UPDATE)
// copyFile (COPY)
// unlinkFile (DELETE)






