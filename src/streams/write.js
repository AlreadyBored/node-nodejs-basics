import path from "path";
import {pipeline} from "stream";
import fs from "fs";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');

    process.stdin.setEncoding('utf8');

    pipeline(
        process.stdin,
        fs.createWriteStream(filePath, 'utf8'),
        (err) => {
            if (err) {
                console.log(err);
            }
        },
    )
};

write();
