import { writeFile } from 'node:fs/promises';
import { CreateError } from '../errors/createError.js'

export const create = async () => {
    try {
        const content = 'I am fresh and young';
        await writeFile('src/fs/files/fresh.txt', content , { flag: 'wx' }); 
    } catch (error) {
        console.error("\x1b[31m", new CreateError(error.stack), `\n`);
    }
};