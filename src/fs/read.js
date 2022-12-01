import {access, readFile} from "fs";
import {fileURLToPath} from "url";
import {createCorrectPath} from "../helper.js";

const read = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const filePath = createCorrectPath(_filename, 'files', 'fileToRead.txt');
    const errorMessage = 'FS operation failed'
    try {
        await access(filePath, (error) => {
            if (error) throw Error(errorMessage);
        })
        await readFile(filePath, 'utf8', (error, data) => {
            if (error) throw Error(errorMessage);
            process.stdout.write(data);
        })
    } catch (error) {}
};

await read();