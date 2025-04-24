import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const copy = async () => {
    const source = path.join(dirname, 'files');
    const destination = `${source}_copy`;

    try {
        await fs.access(source);

        try {
            await fs.access(destination);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                // ошибка означающая нет такой папки "Error NO ENTry"
                throw err;
            }
        }

        // copy existing files
        await fs.cp(source, destination, { recursive: true });
        console.log('Folder copied successfully!');
    } catch (err) {
        console.log(err)
    }
};

await copy();
