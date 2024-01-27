import * as crypto from 'crypto';
import * as fs from 'fs';

const calculateHash = async () => {
	const hash = crypto.createHash('sha256');
	hash.setEncoding('hex');
	const file = fs.createReadStream('files/fileToCalculateHashFor.txt');

	file.on('end', () => {
		hash.end();
		console.log(hash.read());
	});

	file.pipe(hash);
};

await calculateHash();