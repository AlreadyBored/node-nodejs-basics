import {promises as fs} from 'fs';

const DIR       = './src/fs/files/'
const FILENAME  = 'fileToRemove.txt'
const ERRORMSG  = 'FS operation failed'

const remove = async () => {
   try{
        await fs.open(DIR + FILENAME, 'r+')
        await  fs.rm(DIR + FILENAME)
   }catch{
        throw ERRORMSG
   }
};

await remove();