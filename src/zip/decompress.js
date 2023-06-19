//decompress.js- реализовать функцию, которая распаковывает archive.gz обратно с fileToCompress.txt тем же содержимым, что и до сжатия, используя zlib и Streams API
import fs, { createReadStream } from 'fs'
import path from "path"
import zlib from "zlib";
import url from "url";

const _file = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(_file)
const decompress = async (input, output) => {
  const read = await fs.promises.open(output, 'w');
  const readStream = read.createReadStream()

  const write = await fs.promises.open(input);
  const writeStream = write.createReadStream()


  const gzip = zlib.createGunzip();
  readStream.pipe(gzip).pipe(writeStream);
};

const input = path.join(__dirname, "files", "archive.gz");
const output = path.join(__dirname, "files", "fileToCompress.txt");
await decompress(input, output)
