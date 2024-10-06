import { STREAMS_FILES_PATH } from '../../lib/constants/streams.js';
import path from 'path';
import fs from 'fs';

const filePath = path.join(STREAMS_FILES_PATH, 'fileToRead.txt');

const read = async () => {
  const readableStream = fs.createReadStream(filePath);
  readableStream.pipe(process.stdout);
};

await read();
