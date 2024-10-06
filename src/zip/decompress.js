import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import path from 'path';

const decompress = async () => {
  const file = path.join(process.cwd(), 'files', 'fileToCompress.txt');
  const archive_file = path.join(process.cwd(), 'files', 'archive.gz');

  const read_stream = createReadStream(archive_file);
  const write_stream = createWriteStream(file);
  const gunzip = createGunzip();

  read_stream
    .pipe(gunzip)
    .pipe(write_stream)
    .on('error', (error) => {
      console.error(error);
    });
};

await decompress();
