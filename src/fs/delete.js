import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const remove = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        fs.unlink(filePath, (err) => {
            if (err) {
                if (err.code === "ENOENT") {
                    console.log('FS operation failed');
                } else {
                    throw new Error;
                }
            } else {
                console.log('The file has been successfully removed.');
            }
        });
    } catch (error) {
        console.error('Error with deleting the file', error);
    }
};

await remove();