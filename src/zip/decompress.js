const decompress = async () => {
    // Write your code here 
    const { createReadStream } = await import('node:fs');
    const { pipeline, Writable } = await import('node:stream');
    const { createGunzip } = await import('node:zlib');

    const readStream = createReadStream('src/zip/files/archive.gz')
    const gUnzip = createGunzip();

    let decompressedData = ''
    const writableStream = new Writable({
        write(chunk, encoding, callback) {
            decompressedData += chunk;
            callback();
        }
    });

    pipeline(readStream, gUnzip, writableStream, (err) => {
        if (err) {
            throw new Error('Zip operation failed', { cause: err.message })
        } else {
            if (decompressedData != '') {
                console.log('Decompressed content: ', decompressedData)
            } else {
                console.log('The file archive.gz seems to be empty. Add som compressed content!')
            }
        }
    });
}

await decompress();