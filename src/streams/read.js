import { createReadStream } from 'fs'
import path from 'node:path';
import { fileURLToPath } from 'url';
const read = async () => {
    const directory = path.dirname(fileURLToPath(import.meta.url))
    const file = path.join(directory, 'files', 'fileToRead.txt')
    const readable = createReadStream(file)
    readable.pipe(process.stdout)
    readable.resume()
};

await read();
