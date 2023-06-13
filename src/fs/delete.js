import { unlink } from 'fs';
import { HELPER } from './modules/helpers.mjs';

const remove = async () => {
  const __dirname = HELPER.getDirPath(import.meta.url);

  unlink(`${__dirname}/files/fileToRemove.txt`, HELPER.fsErrCb);
};

await remove();
