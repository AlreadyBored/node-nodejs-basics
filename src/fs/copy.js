import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { IsPathExist, __dirname, __filename } from "./shared.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcFolder = path.join(__dirname, "files");
const destFolder = path.join(__dirname, "files_copy");

const copy = async () => {
    // Write your code here
    try {
        const IsSourceDirExist = await IsPathExist(srcFolder);
        const IsDestinationDirExist = await IsPathExist(destFolder);

        if (!IsSourceDirExist || IsDestinationDirExist) {
            throw new Error("FS operation failed");
        }

        await fs.cp(srcFolder, destFolder, { recursive: true });
        console.log('Directory copied successfully');

    } catch (err) {
        console.error(err.message);
    }
};

await copy();
