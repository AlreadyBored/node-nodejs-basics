import fs from 'fs/promises';
import { createGunzip } from 'zlib';

const decompress = async () => {
    try {
        const fhRead = await fs.open('./files/archive.gz');
        const fhWrite = await fs.open('./files/fileDecompressed.txt', 'w');
        
        const rstream = fhRead.createReadStream();
        const decompressTransform = createGunzip();
        const wstream = fhWrite.createWriteStream();

        rstream.on('data', (chunk) => {
            decompressTransform.write(chunk);
        });

        decompressTransform.on('data', (chunk) => {
            wstream.write(chunk);
        });

        rstream.on('end', () => {
            decompressTransform.end();
        });

        decompressTransform.on('end', () => {
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

await decompress();