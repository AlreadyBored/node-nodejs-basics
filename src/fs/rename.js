import {cp} from "fs/promises";
import {dirname} from "../utils/dir.js";

const rename = async () => {
    try {
        const __dirname = dirname(import.meta.url);

        await cp(
            `${__dirname}/files/wrongFilename.txt`,
            `${__dirname}/files/properFilename.md`,
            {errorOnExist: true, force: false, recursive: false}
        );
    } catch (error) {
        if (['ENOENT', 'ERR_FS_CP_EEXIST'].indexOf(error.code) !== -1) {
            throw new Error('FS operation failed');
        }

        throw error;
    }
};

await rename();