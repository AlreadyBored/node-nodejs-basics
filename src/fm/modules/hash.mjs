import crypto from 'crypto';
import fs from 'fs';
import * as errors from './errors.mjs'

const calculateHash = async (inputArgs) => {
	const pathToFile = inputArgs[1];
	const hash = crypto.createHash('sha256');
	hash.setEncoding('hex');
	const fileStream = fs.createReadStream(pathToFile);

	fileStream.on('error', (_) => console.log(errors.operationFailed));
	fileStream.on('end', () => {
		hash.end();
		console.log(hash.read());
	});

	return fileStream.pipe(hash);
};

export { calculateHash }