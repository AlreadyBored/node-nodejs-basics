import crypto from 'crypto';
import { resolve } from 'path';
import { createReadStream } from 'fs';
import { access, constants } from 'fs/promises';

const calculateHash = async (file) => {
  const fullFileName = resolve(file);
  try {
    await access(file, constants.R_OK | constants.W_OK);
    const hash = await new Promise((resolve, reject) => {
      const fileStream = createReadStream(fullFileName);
      fileStream.on('data', (data) => {
        const hash = crypto.createHash('sha256').update(data).digest('hex');
        resolve(hash);
        reject('Error occured');
      });
    });

    console.log(hash);
  } catch (e) {
    if (e.code === 'ENOENT')
      console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', `File ${file} doesn't exist`);
    else console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', e.message);
  }
};
export default calculateHash;
