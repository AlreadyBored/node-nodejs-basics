import fs from 'fs/promises';
import { createGzip } from 'zlib';

const compress = async () => {
    try {
        const fhRead = await fs.open('./files/fileToCompress.txt');
        const fhWrite = await fs.open('./files/archive.gz', 'w');

        const rstream = fhRead.createReadStream();
        const compressTransform = createGzip();
        const wstream = fhWrite.createWriteStream();

        rstream.on('data', (chunk) => {
            compressTransform.write(chunk);
        });

        compressTransform.on('data', (chunk) => {
            wstream.write(chunk);
        });
        
        rstream.on('end', () => {
            compressTransform.end();
        });

        compressTransform.on('end', () => {
            wstream.end();        
        });

        wstream.on('end', async () => {
            await fhRead.close();
            await fhWrite.close();
        });

    } catch (error) {
        throw error;
    }
};

await compress();