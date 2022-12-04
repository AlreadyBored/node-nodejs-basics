import {createUnzip} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream';
import {fileURLToPath} from "url";
import {createCorrectPath} from "../helper.js";

const decompress = async () => {
    const _filename = fileURLToPath(import.meta.url)

    try {
        const rs = createReadStream(createCorrectPath(_filename, 'files', 'archive.gz'));
        const ws = createWriteStream(createCorrectPath(_filename, 'files', 'fileToCompress.txt'));
        const unzip = createUnzip();
        pipeline(rs, unzip, ws, (error) => {
            if (error) console.log(error);
        });
    } catch (error) {}
};

await decompress();