import { open, writeFile, close } from 'node:fs';

const filePath = './fs/files/fresh.txt';
const content = 'I am fresh and young';

const create = async () => {
  open(filePath, 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        throw Error('FS operation failed');
      }

      throw err;
    }

    try {
      writeFile(filePath, content, (err) => {
        if (err) {
          throw err;
        }
      });
    } finally {
      close(fd, (err) => {
        if (err) throw err;
      });
    }
  });
};

await create();
