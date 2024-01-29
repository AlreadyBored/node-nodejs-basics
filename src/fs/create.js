import { existsSync, writeFile } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const file = join(__dirname, `files/fresh.txt`)

const create = async () => {
    if(existsSync(file)) {
        throw new Error('FS operation failed')
    }

    writeFile(file, 'I am fresh and young', () => {})
};

await create();