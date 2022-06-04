import { open } from 'fs/promises';
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToStream = path.join(__dirname, "/files/", "fileToRead.txt")

export const read = async () => {
    const fd = await open(fileToStream);
    const stream = fd.createReadStream();
    stream.pipe(process.stdout);

};
//read()