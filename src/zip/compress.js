import fs from 'fs';
import zlib from 'zlib';
const compress = async () => {
	const readFile = fs.createReadStream('files/fileToCompress.txt');
	const zip = zlib.createGzip();
	const writeFile = fs.createWriteStream('files/archive.gz');
	readFile.pipe(zip).pipe(writeFile); 
};

await compress();