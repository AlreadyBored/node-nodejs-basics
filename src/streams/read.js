import url from "node:url";
import path from "node:path";
import fs from "node:fs"
import {stdout} from 'node:process'

const read = async () => {
    const fileFolder = 'files';

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const stream = fs.createReadStream(path.join(__dirname, fileFolder, 'fileToRead.txt'));

    stream.pipe(stdout);
};

await read();