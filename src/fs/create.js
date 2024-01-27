import fs from 'fs/promises';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';


const create = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const fileName = 'fresh.txt';
    const filePath = path.join(__dirname, 'files', fileName);
    try {
        await fs.access(filePath);
    } catch (error) {
        await fs.writeFile(filePath, 'I am fresh and young')
        return
    }
    throw new Error('FS operation failed'); // yet exist
};

await create();