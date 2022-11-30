import fs from "fs";


const copy = async () => {
    const src = 'files'
    const dest = 'files_copy'
    fs.stat(dest,  (err) => {
        if (!err) {
            throw 'FS operation failed'
        } else if (err.code === 'ENOENT') {
            fs.cp(src, dest, {recursive: true}, () => {
            })
        }
    });

};

await copy();