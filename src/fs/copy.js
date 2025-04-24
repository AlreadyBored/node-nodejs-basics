import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const copy = async () => {
    const sourceDir = join(__dirname, 'files');
    const targetDir = join(__dirname, 'files_copy');

    try {
        await fs.access(sourceDir);
        
        try {
            await fs.access(targetDir);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code === 'ENOENT') {
                await fs.mkdir(targetDir);
                
                const files = await fs.readdir(sourceDir);
                
                for (const file of files) {
                    const sourcePath = join(sourceDir, file);
                    const targetPath = join(targetDir, file);
                    await fs.copyFile(sourcePath, targetPath);
                }
            } else {
                throw new Error('FS operation failed');
            }
        }
    } catch (err) {
        if (err.message === 'FS operation failed') {
            throw err;
        }
        throw new Error('FS operation failed');
    }
};

await copy();
