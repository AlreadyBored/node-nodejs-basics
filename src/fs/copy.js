import { access, mkdir, readdir, copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const fromFolder = join(__dirname,'files');
    const toFolder = join(__dirname,'files_copy');

    try {
        await access(fromFolder);
        try {
            await access(toFolder);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code === 'ENOENT') {
                await mkdir(toFolder);
                console.log('Folder files_copy created successfully');
            } else {
                throw error;
            }
        }

        const files = await readdir(fromFolder);
        for (const file of files) {
            await copyFile(join(fromFolder, file), join(toFolder, file));
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
