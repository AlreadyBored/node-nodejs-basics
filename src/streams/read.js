import fs from 'fs'
import {join} from "path";
import {getExecutedFileDirname} from "../../helpers.js";

const read = async () => {
    const filePath = join(getExecutedFileDirname(import.meta.url), 'files', 'fileToRead.txt');

    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    readStream.on("error", (err)=> console.error(err))

    readStream.pipe(process.stdout)

};

await read();
