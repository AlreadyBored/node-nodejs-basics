import fs from "fs";
import {access, constants} from 'node:fs';

const rename = async () => {
    const src = 'files/wrongFilename.txt'
    const newPath = 'files/properFilename.md'
    access(newPath, constants.F_OK, (err) => {
        if (!err) {
            throw 'FS operation failed'
        }
        return fs.rename(src, newPath, () => {
        });

    });


};

await rename();