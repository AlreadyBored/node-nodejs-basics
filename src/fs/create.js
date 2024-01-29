import { access, mkdir } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { join } from 'node:path';

const create = async (folderName, fileName, fileContent) => {
    await mkdir(folderName, { recursive: true });
    const filePath = join(folderName, fileName);

    try {
        await access(filePath);

        throw new Error('FS operation failed');
    } catch (error) {
        const writeStream = createWriteStream(filePath);

        writeStream.on('open', () => {
            writeStream.write(fileContent);
            writeStream.end();
        });

        writeStream.on('error', (error) => {
            console.error(`FS operation failed: ${error.message}`);
        });
    }
};

await create('files',  'fresh.txt', 'I am fresh and young');