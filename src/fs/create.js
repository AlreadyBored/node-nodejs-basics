import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, "files", "fresh.txt");
    const data = "I am freash and young";
    fs.exists(pathToFile, (isExists) => {
        if (isExists) throw(`FS operation failed`);
    });
    fs.writeFile(pathToFile, data, (err) => {
        if (err) throw err;
    });
};

await create();