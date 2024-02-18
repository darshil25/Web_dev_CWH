// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: -> make folder of each extension and put the files in their respective folders
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from 'fs/promises';
import fsn from 'fs';
import path from 'path';

const baseP = 'C:\\Users\\Lenovo\\OneDrive\\Desktop\\WEB DEV\\Code with Harry\\Web_dev_CWH\\LEC91 - Exercise 15'
let files = await fs.readdir(baseP)
console.log(files);

for (const item of files) {
    let ext = item.split('.')[item.split('.').length - 1]
    console.log(ext);
    if(ext != 'js' && ext != 'json' && item.split.length >1){
        if (fsn.existsSync(path.join(baseP, ext))) {
            //move file to the directory only if it is not js or json file
            fs.rename(path.join(baseP, item),path.join(baseP, ext, item))
        }
        else {
            fsn.mkdirSync(ext)
        }
    }
}