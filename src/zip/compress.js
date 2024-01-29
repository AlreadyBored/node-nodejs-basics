    import fs from 'fs';
    import zlib  from 'zlib';

    const compress = async () => {
        const writeStream = fs.createWriteStream('./files/archive.gz');
        const zipStream = zlib.createGzip();
        zipStream.pipe(writeStream);
        const readStr = fs.createReadStream('./files/fileToCompress.txt', { encoding: 'utf8' });
        readStr.pipe(zipStream, {end: false})
        readStr.on('data', (data) => {
            console.log(data);
        })
    };

    await compress();