const fs = require('fs');
const { createGzip } = require('zlib');
const { pipeline } = require('stream');

const compress = async () => {
    const source = fs.createReadStream('fileToCompress.txt');
    const destination = fs.createWriteStream('archive.gz');
    const gzip = createGzip();

    return new Promise((resolve, reject) => {
        pipeline(source, gzip, destination, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

await compress();
