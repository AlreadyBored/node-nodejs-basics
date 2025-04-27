import { writeFile } from 'fs/promises';
import path from "path";

const fileName = 'fresh.txt';
const fileContext = 'I am fresh and young';
const errorText = 'FS operation failed';

const __dirname = import.meta.dirname;
const pathToFile = path.resolve(__dirname, "files", fileName);

const create = async () => {
    try {
        await writeFile(pathToFile, fileContext, { encoding: 'utf8', flag: 'wx' });
    } catch (error) {
        throw new Error(errorText);
    }
};

await create();