import {access, readdir} from 'fs';
import {fileURLToPath} from "url";
import {createCorrectPath} from "../helper.js";

const list = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const filesDir = createCorrectPath(_filename, 'files');
    const errorMessage = 'FS operation failed';

    try {
        await access(filesDir, (error) => {
            if (error) throw Error(errorMessage)
        })
        await readdir(filesDir, (error, files) => {
            if (error) throw Error(errorMessage)
            console.log(files);
        })
    } catch (error) {}
};

await list();