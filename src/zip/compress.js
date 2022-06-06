import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// Создаю абсолютный путь
const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files');
const ARCHIVE_DEST = join(filePath, 'archive.txt.gz')
const FILE_TO_ZIP = join(filePath, 'fileToCompress.txt');

import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

export const compress = async () => {
  const input = createReadStream(FILE_TO_ZIP, 'utf-8');
  const output = createWriteStream(ARCHIVE_DEST);
  output.on('finish', () => console.log('Archive created'));
  const gzip = createGzip();

  input.on('error', () => { console.log('on INPUT Error') })
  .pipe(gzip)
  .pipe(output)
};

compress()

