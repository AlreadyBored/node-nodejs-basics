import * as fs from 'fs';
import * as path from 'path';
const __dirname = import.meta.dirname
let { COPYFILE_EXCL } = fs.constants;
let FilePath = path.join(__dirname, 'files_copy');
const copy = async () => {
    fs.cp(path.join(__dirname, 'files'), path.join(__dirname, 'files_copy'), {
        recursive: true,
        force: false,
        errorOnExist: true,
      }, (err)=>{
        if(err) throw err;
    })

};

await copy();
