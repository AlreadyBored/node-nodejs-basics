import { rename as rn } from 'fs';
import { HELPER } from './modules/helpers.mjs';

const rename = async () => {
  const __dirname = HELPER.getDirPath(import.meta.url);
  rn(
    `${__dirname}/files/wrongFilename.txt`,
    `${__dirname}/files/properFilename.md`,
    HELPER.fsErrCb
  );
};

await rename();
