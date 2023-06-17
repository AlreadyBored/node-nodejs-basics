/*
 implement function that creates new file fresh.txt 
 with content "I am fresh and young" inside of the "files" folder 
 (if file already exists "Error" with message "FS operation failed" must be thrown)
 */

import { writeFile } from "fs/promises";
import { PATH, FILE_CONTENT, ERR_MSG, ERR_FILE_EXISTS } from "../common/constants.js";

const create = async () => {
    try {
        // flag "wx" to throw an error if file exists
        await writeFile(PATH, FILE_CONTENT, { flag: "wx" })
    } catch (e) {
        if (e.code == ERR_FILE_EXISTS) {
            // custom error if file exists
            throw Error(ERR_MSG);
        } else {
            // log other error
            console.log(e);
        }
    }
};

await create();