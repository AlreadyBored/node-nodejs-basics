import {copyFile, constants, mkdir, readdir } from 'fs/promises';

const copy = async () => {
    const sourceFolder = 'src/fs/files';
    const destinationFolder = 'src/fs/files_copy';
    const errorMessage = 'FS operation failed'
    let files;

    try {
     files = await readdir(sourceFolder);
    } catch(error) {
        console.error(errorMessage)
    }

    try {
        await readdir(destinationFolder);
    } catch(error) {
        await mkdir(destinationFolder)
    }
  
    files.forEach(async (file) => {
        try {
            await copyFile(`${sourceFolder}/${file}`, `${destinationFolder}/${file}`, constants.COPYFILE_EXCL);
        } catch(error) {
            console.error(errorMessage)
        }
    })
};

// 2nd way would be to use fs.cp(src, dest[, options], callback), however looks like it is experimental

await copy();
