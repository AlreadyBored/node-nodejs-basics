import fs from "fs"
import path from "path";
import { pipeline } from 'stream';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

    pipeline(
        fs.createReadStream(filePath, 'utf8'),
        process.stdout,
        (err) => {
            if (err) {
                console.error(err);
            }
        },
    )
};

read();
