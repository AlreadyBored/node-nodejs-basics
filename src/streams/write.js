import {createWriteStream} from 'fs';
import {__dirnameGet} from "../fs/utils.mjs";

const write = async () => {
  const dir = __dirnameGet(import.meta.url);
  const fileName = `${dir}/files/fileToWrite.txt`;
  const stream = createWriteStream(fileName, {encoding: 'utf-8', flags: 'w'});
  process.stdin.pipe(stream);
};

await write();
