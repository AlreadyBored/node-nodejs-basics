import fs from "node:fs/promises";
import path from "path";
import * as url from 'url';
    
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const srcPath = path.join(__dirname, "files");
const destPath = path.join(__dirname, "files_copy"); 

const copy = async () => {
    try {
        await fs.cp(srcPath, destPath, { recursive: true, force: false, errorOnExist: true});
    } catch {
        throw new Error("FS operation failed");
    }
};

await copy();

