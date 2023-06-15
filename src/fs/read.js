import { stat, readFile } from 'node:fs/promises'
import path from 'node:path';
import { fileURLToPath } from 'url';

const read = async () => {
    const directory = path.dirname(fileURLToPath(import.meta.url))
    const file = path.join(directory, 'files', 'fileToRead.txt')
    let fileNotExists = false;
    try {
        await stat(file)
    } catch {
        fileNotExists = true
    }
    if (fileNotExists){
        throw new Error('FS operation failed')
    }
    const fileContent = await readFile(file, {encoding: 'utf-8'})
    console.log(fileContent)
};

await read();
