import path from 'path';
import * as fsPromises from 'fs/promises';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.resolve(__dirname, 'files', 'fresh.txt');

export const create = async () => {
    try {
        await fsPromises.appendFile(pathToFile, 'I am fresh and young',{
            flag: 'wx'
        }).catch(() => {
            throw new Error('FS operation failed');
        });
    }
    catch (e) {
        console.error("\x1b[31m", e.message, "\x1b[0m");
    }
};

create();
