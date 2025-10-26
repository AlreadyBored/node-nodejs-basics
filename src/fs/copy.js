import { cp, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'path';

const srcFolder = path.join('src', 'fs', 'files');
const destFolder = path.join('src', 'fs', 'files_copy');

const copy = async () => {
  try {
    // Ստուգել, որ աղբյուրային ֆոլդերը գոյություն ունի
    await access(srcFolder, constants.F_OK);

    // Ստուգել, որ նպատակային ֆոլդը դեռ գոյություն չունի
    await access(destFolder, constants.F_OK);

    // Եթե արդեն գոյություն ունի, գցել սխալ
    throw new Error('FS operation failed');
  } catch {
    try {
      // Կրկնօրինակել ամբողջ srcFolder → destFolder
      await cp(srcFolder, destFolder, { recursive: true });
    } catch {
      throw new Error('FS operation failed');
    }
  }
};

await copy();
