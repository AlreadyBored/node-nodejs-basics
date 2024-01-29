import { existsSync, createWriteStream } from 'node:fs';
import { mkdir} from 'node:fs/promises';
import { join } from 'node:path';

const errorHandler = error => console.error(error.message)

const create = async (folder, fileName, fileContent) => {
    await mkdir(folder, { recursive: true });
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