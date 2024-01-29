import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const create = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'files', 'IAmFreshAndYoung.txt');

    try {
        await fs.promises.access(filePath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.promises.writeFile(filePath, 'I am fresh and young');
            console.log('File created successfully: IAmFreshAndYoung.txt');
        } else {
            throw error;
        }
    }
};

await create();