import {cp} from "fs/promises";
import {dirname} from "../utils/dir.js";

const copy = async () => {
    try {
        const __dirname = dirname(import.meta.url);

        await cp(
            `${__dirname}/files`,
            `${__dirname}/files_copy`,
            {errorOnExist: true, recursive: true, force: false}
        );
    } catch (error) {
        if (error.code === 'ERR_FS_CP_EEXIST') {
            throw new Error('FS operation failed');
        }

        throw error;
    }
};

await copy();
