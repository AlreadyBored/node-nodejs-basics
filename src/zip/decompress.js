    import fs from 'fs';
    import zlib  from 'zlib';

    const decompress = async () => {
        const writeStr = fs.createWriteStream('./files/decompressedFile.txt');
        const readStr = fs.createReadStream('./files/archive.gz');
        const decompressedStream = zlib.createGunzip();
        readStr.pipe(decompressedStream).pipe(writeStr);
    }

    await decompress();