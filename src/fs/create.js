import { writeFile} from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname } from 'node:path';

const directoryPath = dirname(fileURLToPath(import.meta.url));

export const create = async () => {
    
    const fileContent = 'I am fresh and young!';
    const errorMessage = 'FS operation failed';

    try {
        await writeFile(directoryPath + '/files/fresh.txt', fileContent, {flag: 'wx'});
    } catch (error) {
        throw new Error(errorMessage);
    }
};

create();