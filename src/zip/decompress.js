import fs from 'fs';
import zlib from 'zlib';
const decompress = async () => {
	const readFile = fs.createReadStream('files/archive.gz');
	const unzip = zlib.createUnzip();
	const writeFile = fs.createWriteStream('files/fileToCompress.txt');
	readFile.pipe(unzip).pipe(writeFile); 
};

await decompress();