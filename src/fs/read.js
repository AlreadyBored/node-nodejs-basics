import { promises as fs } from 'fs';

const DIR       = './src/fs/files/'
const FILENAME  = 'fileToRead.txt'
const ERRORMSG  = 'FS operation failed'

const read = async () => {
    try{
        const buf = await fs.readFile(DIR + FILENAME, {flag: 'r+', encoding: 'utf-8'})
        console.log(buf)
    }catch{
        throw ERRORMSG
    }
};

await read();