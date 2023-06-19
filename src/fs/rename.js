import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    const inputFile = path.join(__dirname, 'files/wrongFilename.txt');
    const outputFile = path.join(__dirname, 'files/properFilename.md');

    if (!existsSync(inputFile) || existsSync(outputFile)) {
        throw new Error ('FS operation failed');
    }

    try {
        await fs.rename(inputFile, outputFile);
    } catch (err) {
        console.log(err);
    }
};

await rename();
