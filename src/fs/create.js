import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'url';

const create = async () => {
    const directory = path.dirname(fileURLToPath(import.meta.url))
    const file = path.join(directory, 'files', 'fresh.txt');
    let fileExists = true;
    try {
        await fs.stat(file)
    } catch {
        fileExists = false;
    }

    if (fileExists) {
        throw new Error('FS operation failed')
    }
    await fs.writeFile(file, 'I am fresh and young')
};

await create();
