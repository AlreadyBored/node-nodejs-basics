import { writeFile } from 'node:fs/promises';
import {dirname, join} from 'path'
import { fileURLToPath } from 'url';

const fileName = 'fresh.txt'
const folder = 'files'
const text = 'I am fresh and young';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, folder, fileName);



const create = async () => {
    try {
        await writeFile(filePath, text, {flag: "wx"}, (err)=>{
            if(err){
                console.error("FS operation failed");
            }
        });
    } catch (error) {
        console.error(error.message);
    }
};

await create();