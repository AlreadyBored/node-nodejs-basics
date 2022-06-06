import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// Создаю абсолютный путь
const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files');
const UNZIP_DEST = join(filePath, 'fileToCompress.txt')
const FILE_TO_UNZIP = join(filePath, 'archive.txt.gz');

import { createReadStream, createWriteStream } from 'fs';
import { Unzip } from 'zlib';

export const decompress = async () => {
  const input = createReadStream(FILE_TO_UNZIP);
  input.on('error', () => { console.log('on INPUT Error');
    input.close();
    input.destroy();
    process.exit(); })
  input.on('error', process.exit)
  const output = createWriteStream(UNZIP_DEST);
  const unzipStream = Unzip();

  input.pipe(unzipStream).pipe(output);
};

decompress()