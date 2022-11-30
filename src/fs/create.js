import fs from "fs";
import {access, constants} from 'node:fs';

const create = async () => {
    const path = 'files/fresh.txt'
    access(path, constants.F_OK, (err) => {
        if (err) {
            return fs.writeFile(path, 'I am fresh and young')
        }
        throw 'FS operation failed'
    });
};

await create();
