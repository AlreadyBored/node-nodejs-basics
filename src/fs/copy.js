import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//define source and destination
const sourceDir=path.join(__dirname,'files')
const destinationDir=path.join(__dirname,'files_copy')

const copy = async () => {
    if(fs.existsSync(destinationDir)||!fs.existsSync(sourceDir)){
        throw new Error('FS operation failed')
    }
    fs.cp(sourceDir, destinationDir,{recursive: true},(err)=>{
        if (err) throw err;
    });
};

await copy();
