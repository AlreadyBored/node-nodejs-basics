import fs from 'fs';
import {existsSync} from'node:fs';


export const create = async () => {
const path = './files/fresh.txt'

    if (existsSync(path)){
        console.log('FS operation failed');
   } else{
       fs.writeFile(path, 'I am fresh and young', function (err) {
           if (err) throw err;
            console.log('fresh.txt is created successfully.'); 
           });
   }
};

create()