import { promises, existsSync } from 'fs';
import path from 'path';
import m from './messages.js';

const __dirname = path.resolve();
const readeePath = path.join(__dirname, 'files');

const read = async () => {
    if (!existsSync(readeePath)) throw new Error(m.ERR);

    try {
        const dir = await promises.readdir(readeePath, { withFileTypes: true });

        for (const file of dir) {
            if (file.isFile()) {
                const filePath = path.join(readeePath, file.name);
                const data = await promises.readFile(filePath, 'utf-8');
                console.log(data);
            }
        }

    } catch (err) {
        console.log(`${err}`);
    }
};

await read();