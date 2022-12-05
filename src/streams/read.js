import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as stream from 'stream';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const { stdin, stdout } = process;
  const readable = new stream.Readable({
    read(size) {
      const that = this;
      fs.readFile(path.join(__dirname, 'files', 'fileToRead.txt'), "utf8", function (error, data) {
        that.push(data);
        that.push(null);
        process.exit();
      });
    }
  });
  readable.pipe(process.stdout);
};

await read();
