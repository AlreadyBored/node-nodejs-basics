import fs from 'node:fs';
import { dirname,join } from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const rename = async () => {
    const targetFile = join(__dirname,'/files/wrongFilename.txt');
    const newFile = join(__dirname, '/files/properFilename.md');

    if (!fs.existsSync(targetFile) || fs.existsSync(newFile)){
        throw new Error('FS operation failed!');
    }

    fs.rename(targetFile,newFile, err =>{
        if (err){
            console.error(err)
        }
    })

};

await rename();