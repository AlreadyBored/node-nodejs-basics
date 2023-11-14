const compress = async () => {

    const { createReadStream, createWriteStream } = require('fs');
    const { createGzip } = require('zlib')

    const handleStream = createReadStream(`${__dirname}/files/fileToCompress.txt`)
    handleStream
        .pipe(createGzip())
        .pipe(createWriteStream(`${__dirname}/files/archive.gz`))
        .on('finish', () => {
            console.log('Compression is done');
        })
};

// await 
compress();