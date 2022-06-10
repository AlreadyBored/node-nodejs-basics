import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { copyFile } from 'node:fs/promises';

export const copy = async () => {
    // Write your code here 
    const __dirname = dirname(fileURLToPath(import.meta.url));
    let source = path.resolve(__dirname, 'files');
    let destination = path.resolve(__dirname, 'files_copy');
    let files = await fs.readdir(source);

    try {
        await fs.mkdir(destination, { recursive: false });

    } catch (err) {
        if (err) {
            console.log(err);
            throw new Error("FS operation failed");
        } else {
            console.log("folder created");
        }
    }

    for (let file of files) {
        let filePath = path.resolve(source, file);
        let fileStat = await fs.stat(filePath);



        if (fileStat.isFile()) {
            await copyFile(filePath, path.resolve(destination, file));

        } else if (fileStat.isDirectory()) {

            await fs.mkdir(path.resolve(destination, file));
            await copy(filePath, path.resolve(destination, file));

        }
    }
}


copy();