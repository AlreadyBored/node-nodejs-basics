import { readFile } from 'fs/promises';
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const readFileName = path.join(__dirname, "/files", "fileToRead.txt")

export const read = async () => {
    try {
        const result = await readFile(readFileName );
        console.log(result.toLocaleString())
    } catch (err) {
        throw Error("FS operation failed")
    }
};
//read()