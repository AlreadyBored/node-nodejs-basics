import * as fs from 'fs';
import * as path from 'path';
const __dirname = import.meta.dirname
let FilePath = path.join(__dirname, 'files', 'fileToRemove.txt');
const remove = async () => {
    fs.rm(FilePath, {'flag': 'wx'}, (err)=>{
        if(err) throw Error('FS operation failed');
    })
};

await remove();