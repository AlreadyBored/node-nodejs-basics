import * as zlib from 'zlib';
import * as stream from 'stream';
import path from "path";
import * as fs from "fs";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const compress = async () => {
    const fileFrom = path.resolve(__dirname, 'files', 'fileToCompress.txt');
    const fileTo = path.resolve(__dirname, 'files', 'archive.gz');

    const gzip = zlib.createGzip();
    const source = fs.createReadStream(fileFrom);
    const destination = fs.createWriteStream(fileTo);

    stream.pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error(err);
        }
    });
};

compress();
