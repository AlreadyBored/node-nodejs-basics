import { pipeline } from 'stream/promises';
import { createWriteStream, createReadStream } from 'fs';
import { createUnzip } from 'zlib'; 

const urlFileToCompress = new URL('./files/fileToCompress.txt', import.meta.url);
const urlArchive = new URL('./files/archive.gz', import.meta.url);

const decompress = async () => {
  await pipeline(createReadStream(urlArchive), createUnzip(), createWriteStream(urlFileToCompress)); 
};

await decompress();