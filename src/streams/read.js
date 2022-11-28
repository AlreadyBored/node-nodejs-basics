import {fileURLToPath} from "node:url";
import path from "node:path";
import fs from "node:fs";


const read = async () => {
    // Write your code here
    const fileName = 'fileToRead.txt'
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)
    const fullPath = path.join(__dirname, 'files', fileName)
    const readableStream = fs.createReadStream(fullPath, {encoding: 'utf8'})
    readableStream.on('data', (chunk)=>{
        process.stdout.write(chunk)
    })

};

await read();