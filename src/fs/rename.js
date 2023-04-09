import { promises, existsSync } from 'fs';
import path from 'path';
import m from './messages.js';

const __dirname = path.resolve();
const renameePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const renamePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    if (!existsSync(renameePath) || existsSync(renamePath)) throw new Error(m.ERR);
    
    try {
        await promises.rename(renameePath, renamePath);
    } catch (err) {
        console.log(`${err}`);
    }
};

await rename();