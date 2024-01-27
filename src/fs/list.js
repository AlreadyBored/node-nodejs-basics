import { promises as fs } from 'fs';
import path from 'path';

const __dirname = import.meta.dirname;
const folderName = 'files';
const folderPath = path.join(__dirname, folderName)

const list = async () => {
    try {
        const data = await fs.readdir(folderPath);
        
        console.log(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    }
};

await list();