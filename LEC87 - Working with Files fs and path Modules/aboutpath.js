import path from 'path';

let myPath = "C:\\Users\\Lenovo\\OneDrive\\Desktop\\WEB DEV\\Code with Harry\\Web_dev_CWH\\LEC87 - Working with Files fs and path Modules\\thum.txt"
console.log(path.extname(myPath)); //gives extension of file

console.log(path.dirname(myPath)); //gives directory name
console.log(path.basename(myPath)); //gives file name 

console.log(path.join("c:/", "use\\lenovo\\", "pakhiyo.apk")); //joins the path 