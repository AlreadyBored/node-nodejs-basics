import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';


const fileForCompress = './files/fileToCompress.txt';
const fileForArchive = './files/archive.gz';
const pathToFile = new URL(fileForCompress, import.meta.url);
const pathToFileArchive = new URL(fileForArchive, import.meta.url);

const decompress = async () => {
   await pipeline(createReadStream(pathToFileArchive), createGunzip(), createWriteStream(pathToFile));
};

await decompress();