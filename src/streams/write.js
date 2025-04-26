import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from 'node:stream/promises';
import { createWriteStream } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const targetDir = join(__dirname, 'files');
    const filePath = join(targetDir, 'fileToWrite.txt');
    const fileStream = createWriteStream(filePath);

    try {
        await pipeline(
            process.stdin,
            fileStream,
        )
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await write();
