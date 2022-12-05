import fs from 'fs';

const read = async () => {
	const stream = fs.ReadStream('./files/fileToRead.txt', 'utf8');
	stream.on('error', () => {
		throw new Error('FS operatio failed');
	});
	stream.on('data', data => process.stdout.write(data));
};

await read();
