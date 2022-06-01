import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const text = 'I am fresh and young';

export const create = async () => {
   let isExist =  fs.existsSync(path.join(__dirname,'files','fresh.txt'))
        if(!isExist){
            fs.writeFile(path.join(__dirname,'files','fresh.txt'), text,(err)=>{
                if(err != null){
                throw new Error(err.message);
                   
                }
            })
        }
        else{
            throw new Error('FS operation failed: File already exists, so you can\'t create new one!');
        }
    
};

create().then(data=> console.log('File created')).catch(err=> console.error(err))