import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';

const compress = async () => {
  const file = path.join(process.cwd(), 'files', 'fileToCompress.txt');
  const archive_file = path.join(process.cwd(), 'files', 'archive.gz');

  const read_stream = createReadStream(file);
  const write_stream = createWriteStream(archive_file);
  const gzip = createGzip();

  read_stream
    .pipe(gzip)
    .pipe(write_stream)
    .on('error', (error) => {
      console.error(error);
    });
};

await compress();
