import path from 'node:path';
import * as fs from 'node:fs';
import fsPromises from 'fs/promises';


const create = async () => {
    const filePath = path.join(import.meta.dirname, './files/fresh.txt');

    if (fs.existsSync(filePath)) {
        throw Error('FS operation failed');
    }

    return  fsPromises.writeFile( filePath, 'I am fresh and young');
};

await create();