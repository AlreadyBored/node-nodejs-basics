import { promises } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const filePath = join(__dirname, 'files', 'fresh.txt');

    return promises.access(filePath)
        .then(() => {
            throw new Error('FS operation failed: File already exists');
        })
        .catch((error) => {
            if (error.code === 'ENOENT') {
                const content = 'I am fresh and young\n';
                return promises.writeFile(filePath, content)
                    .then(() => {
                        console.log('File fresh.txt has been created successfully.');
                    });
            } else {
                throw error;
            }
        });
};

create().catch((error) => console.error(error));

