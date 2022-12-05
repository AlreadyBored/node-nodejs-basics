import crypto from 'crypto';
import fs from 'fs';

const calculateHash = async () => {
	fs.readFile('./files/fileToCalculateHashFor.txt', (err, data) => {
		if (err) throw new Error('FS operation failed');
		const hexVal = crypto.createHash('sha256').update(data).digest('hex');
		console.log(hexVal);
	});
};

await calculateHash();
