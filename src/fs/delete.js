import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const removePath = path.join(__dirname,"files","fileToRemove.txt");

    if(!fs.existsSync(removePath)){
        throw new Error('FS operation failed');
    }

    await fs.unlink(removePath, ()=>{});
};

await remove();