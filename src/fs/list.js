import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//define directory
const directoryToList=path.join(__dirname,'files')

const list = async () => {
    if(!fs.existsSync(directoryToList)){
        throw new Error('FS operation failed')
    } 
    fs.readdir(directoryToList,(err, data)=>{
        if(err) throw err
        data.forEach(file=>{
            console.log(file);
        })
    })
};

await list();