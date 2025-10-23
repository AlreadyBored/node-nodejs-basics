import { rename as nodeRename } from 'node:fs';

const oldPath = './fs/files/wrongFilename.txt';
const newPath = './fs/files/properFilename.md';

const rename = async () => {
  nodeRename(oldPath, newPath, (err) => {
    if (err) {
      throw Error('FS operation failed');
    }
  })
};

await rename();
