import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const fileContent = 'I am fresh and young';
    const filePath = path.resolve(__dirname, './files/fresh.txt');

    if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    await fs.promises.writeFile(filePath, fileContent, { encoding: 'utf-8' });
};

await create();
