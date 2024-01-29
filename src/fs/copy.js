import fs from 'fs';
import path from 'path';

const copy = async () => {
    const sourcePath = new URL(path.resolve('./files/'), import.meta.url).pathname;
    const destinationPath = new URL(path.resolve('./files_copy/'), import.meta.url).pathname;


    if (!fs.existsSync(sourcePath)) {
        throw new Error('FS operation failed: source directory does not exist');
    }

    if (fs.existsSync(destinationPath)) {
        throw new Error('FS operation failed: destination directory already exists');
    }

    fs.mkdirSync(destinationPath);

    const files = fs.readdirSync(sourcePath);

    for (const file of files) {
        const sourceFilePath = path.join(sourcePath, file);
        const destinationFilePath = path.join(destinationPath, file);

        if (fs.statSync(sourceFilePath).isDirectory()) {
            fs.mkdirSync(destinationFilePath);
            copyFolderRecursive(sourceFilePath, destinationFilePath);
        } else {
            fs.copyFileSync(sourceFilePath, destinationFilePath);
        }
    }
};

await copy();
