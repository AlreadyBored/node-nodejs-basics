import fs from 'fs';
import { stdin } from 'process';
const write = async () => {
	const fileToWrite = fs.createWriteStream('files/fileToWrite.txt');
	stdin.pipe(fileToWrite);
};

await write();