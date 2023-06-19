import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
    const targetFileName = 'fileToCompress.txt'
    const targetFileArchiveName = 'archive.gz'
    const rStream = fs.createReadStream(targetFileArchiveName);
    const wStream = fs.createWriteStream(targetFileName);
    const zipStream = zlib.createGunzip();

    rStream.pipe(zipStream).pipe(wStream);
};

await decompress();
