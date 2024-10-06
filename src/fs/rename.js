import fs from "fs/promises";
import path from "path";

const rename = async () => {
    const filePath = path.join(import.meta.dirname, 'files', 'wrongFilename.txt');
    const newFilePath = path.join(import.meta.dirname, 'files', 'properFilename.md');
    try {
        await fs.access(filePath);
        try {
            await fs.access(newFilePath);
            throw new Error('FS operation failed')
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }
        await fs.rename(filePath, newFilePath);

    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }

};

await rename();
