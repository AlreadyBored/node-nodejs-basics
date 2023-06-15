import zlib from "zlib";
import fs from "node:fs";
import url from "node:url";
import path from "node:path";

const compress = async () => {
    const fileFolder = 'files';
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const zip = zlib.createGzip();
    const streamR = fs.createReadStream(path.join(__dirname, fileFolder, 'fileToCompress.txt'));
    const streamW = fs.createWriteStream(path.join(__dirname, fileFolder, 'archive.gz'));
    streamR.pipe(zip).pipe(streamW);
};

await compress();