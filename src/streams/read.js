import { createReadStream } from 'node:fs';
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePath = join(__dirname, "files", "fileToRead.txt");

    return new Promise((resolve, reject) => {
        const stream = createReadStream(filePath, { encoding: 'utf8' });

        stream.on('error', (err) => {
            reject(err);
        });

        stream.pipe(process.stdout);

        stream.on('end', () => {
            process.stdout.write('\n');
            resolve();
        });
    });
};

await read();