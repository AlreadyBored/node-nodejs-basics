import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//define old name and new name
const oldNameFilePath = path.join(path.join(__dirname, 'files'), 'wrongFilename.txt');
const renamedFilePath = path.join(path.join(__dirname, 'files'), 'properFilename.md');
const rename = async () => {
    if(fs.existsSync(renamedFilePath)||!fs.existsSync(oldNameFilePath)){
        throw new Error('FS operation failed');
    }
    fs.rename(oldNameFilePath,renamedFilePath,(err)=>{
        if(err) throw err
    });
};

await rename();