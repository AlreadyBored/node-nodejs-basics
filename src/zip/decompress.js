import fs from 'fs';
import path from 'path';
import url from 'url';
import zlib from 'zlib';
import stream from 'stream';
import utils from 'util';


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const sourcePath = path.resolve(__dirname, './files/archive.gz');
  const destinationPath = path.resolve(__dirname, './files/fileToCompress.txt');

  const sourceStream = fs.createReadStream(sourcePath);
  const destinationStream = fs.createWriteStream(destinationPath);
  const gzip = zlib.createUnzip();

  const pipe = utils.promisify(stream.pipeline);

  await pipe(sourceStream, gzip, destinationStream);
};


await decompress();
