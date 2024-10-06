import { STREAMS_FILES_PATH } from '../../lib/constants/streams.js';
import stream from 'stream/promises';
import fs from 'fs';
import path from 'path';

const filePath = path.join(STREAMS_FILES_PATH, 'fileToWrite.txt');
const fileUrl = new URL(filePath, import.meta.url);

const write = async () => {
  const writableStream = fs.createWriteStream(fileUrl, { flags: 'a' });

  await stream.pipeline(process.stdout, writableStream);
};

await write();
