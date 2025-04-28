const compress = async () => {
    // Write your code here 
    const { createReadStream, createWriteStream, } = await import('node:fs');
    const { createGzip } = await import('node:zlib'); 
    const { pipeline } = await import('node:stream');

    const gzip = createGzip();
    const source = createReadStream('src/zip/files/fileToCompress.txt');
    const destination = createWriteStream('src/zip/files/archive.gz');

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            throw new Error('Zip operation failed', { cause: err.message })
        } else {
            console.log('File compressed!')
        }
    });
};

await compress();