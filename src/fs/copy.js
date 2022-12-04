import {cp} from 'node:fs/promises';

const SOURCE = './src/fs/files/'
const DEST   = './src/fs/files_copy/'
const ERRORMSG = 'FS operation failed'

const copy = async () => {
    try{
        await cp(SOURCE, DEST, {errorOnExist: true, recursive: true})
    }catch{
        throw ERRORMSG
    }
};

copy();