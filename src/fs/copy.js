import { access, mkdir, readdir, copyFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const srcPath =  path.join(__dirname, "files");
    const destPath =  path.join(__dirname, "files_copy");
    const errorMessage = "FS operation failed";

    try {
        await access(srcPath);

        try {
            await access(destPath);
            throw new Error(errorMessage);
        } catch (error) {
            await mkdir(destPath);
            const files = await readdir(srcPath);
            await Promise.all(files.map(async file => {
                const srcFilePath = path.join(srcPath, file);
                const destFilePath = path.join(destPath, file);
                await copyFile(srcFilePath, destFilePath);
            }));
        }

    } catch (error) {
        throw new Error(errorMessage);
    }
};

await copy();
