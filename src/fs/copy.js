import fs from 'fs/promises';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const oldNameDir = 'files';
    const newNameDir = 'files_copy';
    const filePath = path.join(__dirname, oldNameDir);
    const filePath2 = path.join(__dirname, newNameDir);
    try {
        await fs.access(filePath2)
    } catch (error) {
        try {
            await fs.access(filePath)
            await fs.cp(filePath, filePath2, {recursive: true});
            return
        } catch (error) {
            throw new Error("FS operation failed. Can't find directory for copy");
        }
    }
    throw new Error('FS operation failed');

};

await copy();
