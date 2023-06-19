import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'node:fs';
import { mkdir } from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    const input = path.join(__dirname, 'files');
    const output = path.join(__dirname, 'files-copy');

    if (!existsSync(input) || existsSync(output)) {
        throw new Error ('FS operation failed');
    }

    async function copyFiles(inputPath, outputPath) {
        await mkdir(outputPath, { recursive: true });

        try {
            await fs.readdir(inputPath, { withFileTypes: true }, (err, data) => {
                data.forEach((file) => {
                    const current = file.name;
                    const inputCurrent = path.resolve(inputPath, current);
                    const outputCurrent = path.resolve(outputPath, current);

                    if (file.isFile()) {
                        fs.copyFile(inputCurrent, outputCurrent, () => {});
                    } else {
                        copyFiles(inputCurrent, outputCurrent);
                    }
                });
            });
        } catch (err) {
            console.log(err);
        }
    }

    copyFiles(input, output);
};

await copy();
