import fs from 'fs';
import { createGunzip } from 'zlib';

const filePath = new URL('files/archive.gz', import.meta.url);
const decompressedFilePath = new URL('files/fileToCompress.txt', import.meta.url);
const decompress = async () => {
    // Write your code here 
    const fileStream = fs.createReadStream(filePath);
    const gunzipStream = createGunzip();

    fileStream.pipe(gunzipStream).pipe(fs.createWriteStream(decompressedFilePath));
};

await decompress();