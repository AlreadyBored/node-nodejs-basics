/*
 implement function that creates new file fresh.txt 
 with content "I am fresh and young" inside of the "files" folder 
 (if file already exists "Error" with message "FS operation failed" must be thrown)
 */

import { writeFile } from 'fs/promises';
import { PATH, FILE_CONTENT, ERR_MSG } from '../common/constants.js';

const create = async () => {
    try {
        await writeFile(PATH, FILE_CONTENT, {flag: "wx"})
    } catch (e) {
        throw Error(ERR_MSG);
    }
};

await create();