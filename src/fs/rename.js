import {renameSync, existsSync} from'node:fs';


export const rename = async () => {  
    const name = './files/wrongFilename.txt'
    const newName = './files/properFilename.md' 

    if (existsSync(newName) || !existsSync(name)){
        console.log('FS operation failed');
    } else{
        renameSync(name, newName, (err) => {
            if (err) throw err;
            console.log('Rename completed');
          });
    }
};

rename() 


