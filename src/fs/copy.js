import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const srcFolder = join(__dirname, 'files');
const destFolder = join(__dirname, 'files_copy');

const copy = async () => {
    try {
        await mkdir(destFolder);
        
        const files = await readdir(srcFolder);
        for (const file of files) {
                await copyFile(join(srcFolder, file), join(destFolder, file));
            }
        }  catch (err) {
        console.error('FS operation failed');
    }
}

await copy();
