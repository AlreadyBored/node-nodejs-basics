import * as fs from 'fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const fileName = 'fresh.txt';

const create = async () => {
    try {
        await fs.access(
            join(__dirname, 'files', fileName),
            fs.constants.F_OK
        )
        .then(() => {
            throw new Error('FS operation failed');
        })
    } catch(err) {
        if (err.code === 'ENOENT') {
            try {
                await fs.writeFile(
                    join(__dirname, 'files', fileName),
                    'I am fresh and young',
                );
            } catch(err) {
                console.log(`Error with writing to a file: ${err}`);
            }
        } else {
            console.log(err.message);
        }
    }
};

await create();