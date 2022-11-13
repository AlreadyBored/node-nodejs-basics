import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const read = async () => {
    fs.readFile(path.resolve(__dirname, 'files', 'fileToRead.txt'),(err, data)=>{
        if(err) return console.log('FS operation failed');
        console.log(data.toString());
    })
    // Write your code here 
};

await read();