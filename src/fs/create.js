import fs from 'node:fs';

const create = async () => {
    try {
        const fd = fs.openSync('test.txt', 'w+');
      } catch (err) {
        console.error(err);
      }};

await create();

