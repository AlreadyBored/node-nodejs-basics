import { promises as fs } from 'fs';
import path from 'path';

const source = './src/fs/files';
const destination = './src/fs/files_copy';
const messageOfError = 'FS operation failed';

const copy = async (srcDir, destDir, errMessage) => {

    const errorMessage = new Error(errMessage);

    try {
        await fs.access(srcDir);        
    } catch (e) {
        if (e.code === 'ENOENT') {
            throw errorMessage;
        } else {
            throw new Error(`Failed to access source directory '${srcDir}': ${e.message}`);
        }
    }
    
    try {
        const destExists = await fs.access(destDir).then(() => true).catch(() => false);
        if (destExists) {
            throw errorMessage;
        }          
        await fs.mkdir(destDir, { recursive: true });
        const files = await fs.readdir(srcDir);
        for (const file of files) {
            const srcPath = path.join(srcDir, file);
            const destPath = path.join(destDir, file);
            const stats = await fs.stat(srcPath);
            if (stats.isDirectory()) {
                await copy(srcPath, destPath, errMessage);
            } else {
                await fs.copyFile(srcPath, destPath);
            }
        } 
    } catch (e) {
        throw new Error(e.message);        
    }
};

await copy(source, destination , messageOfError);