import fs from 'fs';
import zlib from 'zlib';
import stream from 'stream';

const decompress = async () => {
    const archivePath = 'src/zip/files/archive.gz';
    const outputPath = 'src/zip/files/fileToCompress.txt';
    const archiveStream = fs.createReadStream(archivePath);
    const outputStream = fs.createWriteStream(outputPath);
    const unzip = zlib.createUnzip();

    stream.pipeline(archiveStream, unzip, outputStream, (err) => {
        if (err) throw err;
    });
};

await decompress();
