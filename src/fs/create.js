import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeFile} from 'fs/promises';

const __filename =  fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {

    const src = __dirname+'/files/fresh.txt';
    const content = 'I am fresh and young';
    const existMsg='FS operation failed';

    try {
        await writeFile(src,content,{flag:'wx'})
    } catch(err) {
        throw new Error(existMsg)
    }
};

create();