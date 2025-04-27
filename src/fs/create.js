import  { open, appendFile, access } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


const create = async () => {

    let fileHandle;
    try {
        const fileURL = new URL('./files/fresh.txt', import.meta.url);
        const filePath = fileURLToPath(fileURL);
        
        fileHandle = await open(filePath, 'ax');
    
        fileHandle.appendFile('I am fresh and young');

    } catch (error) {
       if(error.code === 'EEXIST'){
        throw new Error('FS operation failed');
       } else {
        throw error;
       }   
    } finally {
        await fileHandle?.close();
    } 
};

await create();