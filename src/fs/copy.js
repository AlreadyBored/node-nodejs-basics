import {promises as fs} from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const copy = async () => {
    const sourceDir = path.resolve(__dirname, 'files');
    const targetDir = path.resolve(__dirname, 'files_copy');

    try {
        const sourceDirExists = await fs.stat(sourceDir);
        if (!sourceDirExists.isDirectory()) {
            throw new Error(`'${sourceDir}'undefined `);
        }

    } catch (error) {
        throw new Error('FS operation failed');
    }

    try {
        const files = await fs.readdir(sourceDir);
            await fs.mkdir(targetDir);
            for (const file of files) {
                const sourcePath = path.join(sourceDir, file);
                const targetPath = path.join(targetDir, file);

                await fs.copyFile(sourcePath, targetPath);
            }

            console.log('Folder successfully copied!');

    } catch (error) {
        throw new Error(`FS operation failed`);
    }
};


await copy();
