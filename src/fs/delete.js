import {access, rm} from "fs";
import {createCorrectPath} from "../helper.js";
import {fileURLToPath} from "url";

const remove = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const filePath = createCorrectPath(_filename, 'files', 'fileToRemove.txt');
    const errorMessage = 'FS operation failed';

    try {
        await access(filePath, (error) => {
            if (error) throw Error(errorMessage);
        })
        rm(filePath, (error) => {
            if (error) throw Error(errorMessage);
        })
    } catch (error) {}
};

await remove();