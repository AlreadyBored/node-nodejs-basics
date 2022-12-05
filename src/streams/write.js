import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as stream from 'stream';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const { stdin, stdout } = process;
  const writable = new stream.Writable({
    write(data, enk, next) {
      fs.writeFile(path.join(__dirname, 'files', 'fileToWrite.txt'), data, (err) => {
        if (err)
          console.log(err);
        else {
          process.exit();
        }
      });
    }
  });
  stdin.pipe(writable);
};

await write();
