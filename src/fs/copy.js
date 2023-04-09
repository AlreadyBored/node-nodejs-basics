import { access, mkdir, copyFile, readdir } from 'node:fs/promises';
import {dirname, join} from 'path'
import { fileURLToPath } from 'url';

const sourceFolder = 'files';
const destinationFolder = 'files_copy';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceFolderPath = join(__dirname, sourceFolder);
const destinationFolderPath = join(__dirname, destinationFolder);

const copy = async () => {
    try {
        const isSourceFolderExists = await access(sourceFolderPath)
                                            .then(() => true)
                                            .catch(() => false);
        if (!isSourceFolderExists) {
          throw new Error('FS operation failed');
        }
    
        await mkdir(destinationFolderPath, {flag: "wx"});

        const files = await readdir(sourceFolderPath);
        for (let i=0; i<files.length; i++) {
          const sourceFilePath = join(sourceFolderPath, files[i]);
          const destinationFilePath = join(destinationFolderPath, files[i]);
          await copyFile(sourceFilePath, destinationFilePath);
        }
    } catch (error) {
        console.error(error.message);
    }   
};

await copy();
