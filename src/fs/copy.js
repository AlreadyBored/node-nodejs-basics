import { promises, existsSync } from 'fs';
import path from 'path';
import m from './messages.js';

const __dirname = path.resolve();
const currentFolderPath = path.join(__dirname, 'files');
const copiedFolderPath = path.join(__dirname, 'files_copy');

const copy = async () => {
    if (!existsSync(currentFolderPath) || existsSync(copiedFolderPath)) throw new Error(m.ERR);

    try {
        const dir = await promises.readdir(currentFolderPath, { withFileTypes: true });
	    await promises.mkdir(copiedFolderPath, { recursive: true });

        for (const file of dir) {
            if (file.isFile()) {
                const copeeFilePath = path.join(currentFolderPath, file.name);
                const newFilePath = path.join(copiedFolderPath, file.name);
                
                const data = await promises.readFile(copeeFilePath);
                await promises.writeFile(newFilePath, data)
            }
        }

    } catch (err) {
        console.log(`${err}`);
    }
};

await copy();
