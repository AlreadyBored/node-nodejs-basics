const fs = require('fs');
const zlib = require('zlib');

const decompress = async () => {
    const gzip = zlib.createGunzip();
    const source = fs.createReadStream('archive.gz');
    const destination = fs.createWriteStream('fileToCompress.txt');

    source.pipe(gzip).pipe(destination);

    return new Promise((resolve, reject) => {
        destination.on('finish', resolve);
        destination.on('error', reject);
    });
};

await decompress();
