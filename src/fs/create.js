import { fileURLToPath } from 'node:url';
import { writeFile, access, constants, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';


const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const directory = join(__dirname, 'files');
    const fileName = 'fresh.txt';
    const filePath = join(directory, fileName);
    const fileContent = 'I am fresh and young';

    try {
        await access(filePath, constants.F_OK);

        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await mkdir(directory, { recursive: true });
            await writeFile(filePath, fileContent, 'utf-8');            
        } else {
            console.error(error.message);
        }
    }
};

await create();