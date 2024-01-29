import { existsSync, createWriteStream, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const create = async (folder, fileName, fileContent) => {
    await mkdirSync(folder, { recursive: true });
    const filePath = join(folder, fileName);

    if (existsSync(filePath)) {
        throw new Error('FS operation failed')
    } else {
        const writeStream = createWriteStream(filePath);

        writeStream.on('open', () => {
            writeStream.write(fileContent);
            writeStream.end();
        });

        writeStream.on('error', (error) => {
            console.error(`Write operation failed: ${error.message}`);
        });
    }
};

await create('files',  'fresh.txt', 'I am fresh and young');