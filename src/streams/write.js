import {stdin} from 'node:process';
import url from "node:url";
import fs from "node:fs"
import path from "node:path";

const write = async () => {
    const fileFolder = 'files';

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const stream = fs.createWriteStream(path.join(__dirname, fileFolder, 'fileToWrite.txt'));

    stdin.pipe(stream);
};

await write();