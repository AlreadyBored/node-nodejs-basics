import { cp } from 'fs';
import { HELPER } from './modules/helpers.mjs';

const copy = async () => {
  const __dirname = HELPER.getDirPath(import.meta.url);
  cp(
    `${__dirname}/files`,
    `${__dirname}/files_copy`,
    {
      recursive: true,
      force: false,
      errorOnExist: true,
    },
    HELPER.fsErrCb
  );
};

await copy();
