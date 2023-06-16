import fs from "fs/promises";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folder = path.join(__dirname, 'files');
const list = async () => {
    fs.access(folder).then(async () => {
        console.log(await fs.readdir(folder))
    }).catch(() => {
        throw new Error('FS operation failed')
    }
    )
};

await list();