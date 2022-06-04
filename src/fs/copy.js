import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const from = path.resolve(path.dirname(''), 'src', 'fs', 'files');
const to = path.resolve(path.dirname(''), 'src', 'fs', 'files_copy');

export const copy = async () => {
    fs.access(from, function (error) {
        if (error) {try{throw new Error('FS operation failed')} catch(error){console.log(error.message)}}
        else {
            fs.access(to, async function (error) {
                if (error) {
                    await fsPromises.mkdir(to).then
                    copyFiles(from, to);
                } else {try{throw new Error('FS operation failed')} catch(error){console.log(error.message)}}
            });
        }
    });
};
async function copyFiles(source, destination) {
    fs.readdir(path.resolve(path.dirname(''), source), { withFileTypes: true }, async (err, files) => {
        if (err)
            console.log(err);
        else {
            for await (const file of files) {
                if (file.isFile()) {
                    await fsPromises.copyFile(path.resolve(path.dirname(''), source, file.name), path.resolve(path.dirname(''), destination, file.name), 2);
                }
                else {
                    await fsPromises.mkdir(path.resolve(path.dirname(''), destination, file.name), { recursive: true });
                    await copyFiles(path.resolve(path.dirname(''), source, file.name), path.resolve(path.dirname(''), destination, file.name));
                }
            }
        }
    })
}

copy();