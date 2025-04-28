import fs from 'node:fs';
import path from 'node:path';
const copy = async () => {
    const sourceDir = path.join('fs', 'files');
    const copyDir = path.join('fs', 'files_copy');

    fs.access(sourceDir, fs.constants.R_OK, (err) => {
        if (err && err.code === 'ENOENT')
            throw new Error('FS operation failed');
    });

    fs.access(copyDir, fs.constants.R_OK, (err) => {
        if(!err) {
            throw new Error('FS operation failed');
        }
    });

    fs.cp(sourceDir, copyDir, { recursive: true }, (err) => {
        if(err) throw err;
    });

    //
    // fs.readdir(sourceDir, (err, files) => {
    //     files.forEach(file => {
    //         const filePath = path.join(sourceDir, file);
    //         fs.readFile(filePath, {encoding: 'utf8'}, (err, data) => {
    //             if (err) {
    //                 console.error('Error reading:', err);
    //             } else {
    //                 fs.writeFile(path.join(copyDir, file), data, {flag: 'w+'}, err => {});
    //             }
    //         })
    //     })
    // });
};

await copy();