import { promises, existsSync } from 'fs';
import path from 'path';
import m from './messages.js';

const __dirname = path.resolve();
const removeePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    if (!existsSync(removeePath)) throw new Error(m.ERR);

    try {
        await promises.rm(removeePath);
    } catch (err) {
        console.log(`${err}`);
    }
};

await remove();