import fs from 'fs';
import { stdout } from 'process';

const read = async () => {
	const fileToRead = fs.createReadStream('files/fileToRead.txt');
	fileToRead.pipe(stdout);
};

await read();