import { writeFile, existsSync } from 'node:fs'
const create = async () => {
  if (existsSync('src/fs/files/fresh.txt')) throw new Error('FS operation failed')
  else writeFile('src/fs/files/fresh.txt', 'I am fresh and young', () => {})
};

await create();
