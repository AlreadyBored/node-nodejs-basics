import { promises as fs } from 'fs'
import { constants } from 'fs';

export const create = async () => {
    try {
        await fs.access('files/fresh.txt', constants.F_OK);
        console.log('Error:FS operation failed');
    } catch {
        await fs.writeFile("files/fresh.txt", "I am fresh and young");
    } 
};

create()