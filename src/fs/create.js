import { writeFile } from 'fs';
import { HELPER } from './modules/helpers.mjs';

const create = async () => {
  const __dirname = HELPER.getDirPath(import.meta.url);

  writeFile(
    `${__dirname}/files/fresh.txt`,
    'I am fresh and young',
    { flag: 'wx' },
    HELPER.fsErrCb
  );
};

await create();
