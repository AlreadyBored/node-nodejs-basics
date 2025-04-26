import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const targetDir = join(__dirname, 'files');
    const filePath = join(targetDir, 'fileToRead.txt');
    const fileStream = createReadStream(filePath);

    try {
        await pipeline(
            fileStream,
            process.stdout
        );
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
