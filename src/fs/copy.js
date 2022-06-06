import { stat, constants, mkdir, readdir } from 'fs';
import { copyFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { fsException, folderName } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const copyFolderName = path.join(__dirname, `${folderName}-copy`);
const rootFolderName = path.join(__dirname, folderName);

export const copy = async () => {
    stat(rootFolderName, function(err, stats) {
        if (!stats) throw new Error(fsException);
        stat(copyFolderName, copyFiles);
    });
};

function copyFiles(err, stats) {
    if (stats) throw new Error(fsException);

    readdir(rootFolderName, (readdirErr, files) => {
        if (readdirErr) throw new Error(readdirErr);

        mkdir(copyFolderName, async mkdirErr => {
            if (mkdirErr) throw new Error(mkdirErr);
            const promises = [];
            for (let file of files) {
                promises.push(copyFile(
                    path.join(rootFolderName, file),
                    path.join(copyFolderName, file),
                    constants.COPYFILE_EXCL
                ));
            }

            try {
                await Promise.all(promises);
                console.log('All ready!'); 
            } catch (error) {
                if (error) throw new Error(error);
            }
        });
    });
}

copy();