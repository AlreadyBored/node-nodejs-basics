import { writeFile} from "node:fs/promises"

export const create = async () => {
    
    const fileContent = 'I am fresh and young!';
    const errorMessage = 'FS operation failed';

    try {
        await writeFile('./src/fs/files/fresh.txt', fileContent, {flag: 'wx'});
    } catch (error) {
        throw new Error(errorMessage);
    }
};

create();