import * as fs from 'fs';
import * as path from 'path';
const __dirname = import.meta.dirname
let FilePath = path.join(__dirname, 'files', 'fresh.txt');
const create = async () => {
    fs.writeFile(FilePath, 'I am fresh and young', {'flag': 'wx'}, (err)=>{
        if(err) throw Error('FS operation failed');
    })
};

await create();