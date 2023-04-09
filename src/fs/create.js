import {promises as fs} from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const create = async () => {
    const fileName = "fresh.txt";
    const filePath = path.resolve(__dirname, 'files', fileName);
    try {
        await fs.access(filePath)
        throw new Error("FS operation failed");

    } catch (error) {
        if (error.code === "ENOENT") {
            await fs.writeFile(filePath, 'I am fresh and young');
            console.log('File create');
        } else {
            throw error;
        }
    }
};

await create();
