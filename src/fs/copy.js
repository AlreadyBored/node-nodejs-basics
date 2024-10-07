import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.join(path.dirname(filename), 'files');
  const dirname_copy = path.join(path.dirname(filename), 'files_copy');
  fs.stat(dirname, (err, data) => {
    if (err || !data.isDirectory()) throw new Error('FS operation failed');
    fs.stat(dirname_copy, (err, data) => {
      if (!err && data.isDirectory()) throw new Error('FS operation failed');
      else
        fs.cp(dirname, dirname_copy, { recursive: true }, (err) => {
          if (err) throw new Error('FS operation failed');
        });
    });
  });
};

await copy();
