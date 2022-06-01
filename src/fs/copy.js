import { stat, constants, mkdir, readdir } from 'fs';
import { copyFile } from 'fs/promises';
import { fsException, folderName } from '../constants.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const copyFolderName = `${__dirname}/${folderName}-copy`;
const rootFolderName = `${__dirname}/${folderName}`;

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
                    `${rootFolderName}/${file}`,
                    `${copyFolderName}/${file}`,
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