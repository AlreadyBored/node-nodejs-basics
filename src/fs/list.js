import { readdir } from 'fs';
import { HELPER } from './modules/helpers.mjs';

const list = async () => {
  const __dirname = HELPER.getDirPath(import.meta.url);
  const res = readdir(`${__dirname}/files`, (err, files) =>
    err ? HELPER.fsErrCb(err) : console.log(files)
  );
};

await list();
