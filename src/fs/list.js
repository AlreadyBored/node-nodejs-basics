import { promises, existsSync } from 'fs';
import path from 'path';
import m from './messages.js';

const __dirname = path.resolve();
const readeePath = path.join(__dirname, 'files');

const list = async () => {
    if (!existsSync(readeePath)) throw new Error(m.ERR);

    try {
        const dir = await promises.readdir(readeePath, { withFileTypes: true });

        for (const file of dir) {
            if (file.isFile()) {
                console.log(file.name);
            }
        }

    } catch (err) {
        console.log(`${err}`);
    }
};

await list();