import fs from 'node:fs/promises';

// rename.js - implement function that renames file wrongFilename.txt
// to properFilename with extension .md (if there's no file wrongFilename.txt
// or properFilename.md already exists Error with message FS operation failed
// must be thrown)

const rename = async () => {
    // Write your code here
    const pathToFile = './files';
    const actualFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';

    const sourcePath = `${pathToFile}/${actualFileName}`;
    const newPath = `${pathToFile}/${newFileName}`;
    const errorMessage = 'FS operation failed';

    try {
        await fs.access(sourcePath);
        try {
            await fs.access(newPath);
            throw new Error(errorMessage);
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw new Error(errorMessage);
            }
        }
        await fs.rename(sourcePath, newPath);
    } catch {
        throw new Error(errorMessage);
    }
};

await rename();
