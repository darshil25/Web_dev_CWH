import fs from "fs/promises"

let a = await fs.readFile('thum.txt')
let b = await fs.writeFile('thum.txt', `\n\n\n\nI don't know what to doo`)
let c= await fs.appendFile('thum.txt', ' But author is shame')
console.log(a.toString(), b, c);