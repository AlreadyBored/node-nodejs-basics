import { promises, existsSync } from 'fs';
import path from 'path';
import m from './messages.js';

const __dirname = path.resolve();
const newFilePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {		
	    if (existsSync(newFilePath)) throw new Error(m.ERR);
        await promises.writeFile(newFilePath, m.NEW_FILE_CONTENT);   
	} catch (err) {
		console.log(`${err}`);
	}
};

await create();