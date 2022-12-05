import {createHash} from 'crypto';
import {createReadStream} from 'fs';
import {__dirnameGet, log} from "../fs/utils.mjs";

const calculateHash = async () => {
  const dir = __dirnameGet(import.meta.url);
  const fileName = `${dir}/files/fileToCalculateHashFor.txt`;
  const endWithEmptyLine = true;
  const hash = createHash('sha256');
  const reader = createReadStream(fileName);
  reader.pipe(hash).setEncoding('hex').pipe(process.stdout, {end: !endWithEmptyLine});
  endWithEmptyLine && reader.on('end', () => log(''));
};

await calculateHash();
