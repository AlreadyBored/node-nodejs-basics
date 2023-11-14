const decompress = async () => {
    const { createReadStream, createWriteStream } = require('fs');
    const { createGunzip } = require('zlib')

    const handleStream = createReadStream(`${__dirname}/files/archive.gz`)
    handleStream
        .pipe(createGunzip())
        .pipe(createWriteStream(`${__dirname}/files/fileToCompress.txt`))
        .on('finish', () => {
            console.log('DeCompression is done');
        })
};

// await
decompress();