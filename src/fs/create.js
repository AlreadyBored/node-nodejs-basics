import { writeFile, open, close } from 'fs';

async function create(name) {

  const path = `./files/${name}`;

  open(path, 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error('FS operation failed');
        return;
      }

      throw err;
    }

    try {
      writeFile(path, 'I am fresh and young', (err) => {
            if (err)
              throw err;
          });
    } finally {
      close(fd, (err) => {
        if (err) throw err;
      });
    }
  });
}

await create('fresh.txt');