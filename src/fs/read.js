import {readFile} from 'node:fs/promises'

const read = async () => {
    const file = 'src/fs/files/fileToRead.txt';
    try{
        console.log(await readFile(file,{
            encoding: 'utf8'
        }))
    }catch(error){
        throw new Error('FS operation failed');
    }
};

await read();