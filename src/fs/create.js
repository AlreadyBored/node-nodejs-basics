import {access, appendFile} from "fs";
import {fileURLToPath} from "url";
import {createCorrectPath} from "../helper.js";


const create = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const filePath = createCorrectPath(_filename, 'files', 'fresh.txt');
    const errorMessage = 'FS operation failed'

    try {
        await access(filePath, err => {
            if (!err) {
                throw Error(errorMessage)
            }
        });
        await appendFile(filePath, 'I am fresh and young', (error) => {
            if (error) throw Error(errorMessage)
        });
    } catch (error) {}
};

await create();