import { access, rm, constants } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);
    
    const directory = join(__dirname, 'files');
    const fileName = 'fileToRemove.txt';
    const filePath = join(directory, fileName);

    try {
        await access(filePath, constants.F_OK);

        await rm(filePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await remove();