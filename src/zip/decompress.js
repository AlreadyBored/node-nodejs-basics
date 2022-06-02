import fs from 'fs';
import url from 'url';
import path from 'path';
import zlib from 'zlib';
import stream from 'stream';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async () => {
    const pathToDestination = path.join(__dirname, 'files', 'fileToCompress.txt');
    const pathToSource = path.join(__dirname, 'files', 'archive.gz');
    const gzip = zlib.createUnzip();
    const rs = fs.createReadStream(pathToSource);
    const ws = fs.createWriteStream(pathToDestination);

    await stream.promises.pipeline(
        rs, gzip, ws
    );

    await fs.promises.rm(pathToSource);
};