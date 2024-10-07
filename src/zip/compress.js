import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';


const fileForCompress = './files/fileToCompress.txt';
const fileForArchive = './files/archive.gz';
const pathToFile = new URL(fileForCompress, import.meta.url);
const pathToFileArchive = new URL(fileForArchive, import.meta.url);

const compress = async () => {
  await pipeline(createReadStream(pathToFile), createGzip(), createWriteStream(pathToFileArchive));
};

await compress();