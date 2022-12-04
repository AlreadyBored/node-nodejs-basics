import {createGzip} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream';
import {fileURLToPath} from "url";
import {createCorrectPath} from "../helper.js";

const compress = async () => {
    const _filename = fileURLToPath(import.meta.url)

    try {
        const rs = createReadStream(createCorrectPath(_filename, 'files', 'fileToCompress.txt'));
        const ws = createWriteStream(createCorrectPath(_filename, 'files', 'archive.gz'));
        const gzip = createGzip();
        pipeline(rs, gzip, ws, (error) => {
            if (error) console.log('pipeline failed')
        });
    } catch (error) {}
};

await compress();