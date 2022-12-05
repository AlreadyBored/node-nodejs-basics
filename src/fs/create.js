import {writeFile} from 'node:fs/promises'
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const create = async () => {

    const _dirname = path.dirname(fileURLToPath(import.meta.url))
    try {
        const filename = _dirname + '/files/fresh.txt';
        await writeFile(filename, 'I am fresh and young');
        console.log(`created file "${filename}"`);
    } catch (err) {
        throw new Error('FS operation failed');
    }
}

await create();

