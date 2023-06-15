import url from "node:url";
import path from "node:path";
import zlib from "zlib";
import fs from "node:fs";

const decompress = async () => {
    const fileFolder = 'files';
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const zip = zlib.createUnzip();
    const streamR = fs.createReadStream(path.join(__dirname, fileFolder, 'archive.gz'));
    const streamW = fs.createWriteStream(path.join(__dirname, fileFolder, 'fileToCompress.txt'));
    streamR.pipe(zip).pipe(streamW);
};

await decompress();