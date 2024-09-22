import { promises as fs } from 'fs';
import { join } from 'path';
import { ERROR_MESSAGES, __DIR_NAME } from "./constants.js";

const create = async () => {
    const filePath = join(__DIR_NAME, 'files', 'fresh.txt');
    const content = 'I am fresh and young';

    try {
        await fs.access(filePath);

        throw new Error(ERROR_MESSAGES);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.mkdir(join(__DIR_NAME, 'files'), { recursive: true });

            await fs.writeFile(filePath, content);
        } else {
            throw error;
        }
    }
};

await create();