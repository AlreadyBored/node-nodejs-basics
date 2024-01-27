import * as fs from 'fs'
import path from 'path';

const __dirname = import.meta.dirname;

const folderName = 'files';
const fileName = 'create.js';
const fileContent = 'I am fresh and young';
const filePath = path.join(__dirname, folderName, fileName);

const create = async () => {
    try {
        if (fs.existsSync(filePath)) {
            throw new Error('FS operation failed')
        }

        fs.writeFileSync(filePath, fileContent, 'utf8')
    } catch (error) {
        throw new Error(error.message)
    }
};

await create();