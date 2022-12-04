import {promises as fs} from 'fs';

const OLD = './src/fs/files/wrongFilename.txt'
const NEW = './src/fs/files/properFilename.md'
const ERRORMSG = 'FS operation failed'

const rename = async () => {
    try{
        await fs.rename(OLD, NEW)
    }
    catch{
        throw ERRORMSG
    }
};

await rename();