import { pipeline } from 'stream';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { Transform } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const transform = async () => {
  return new Promise((resolve, reject) => {
    const readable = process.stdin;
    const writable = process.stdout;
    const transform = new Transform();
    transform._transform = (chunk, encoding, callback) => {
      const changes = chunk.toString().trim().split('').reverse().join('');
      callback(null, changes + '\n');
    };
    pipeline(
        readable,
        transform,
        writable,
        (err) => {
          if(err){
            reject(err)
          } else {
            resolve('Complete')
          }
        })
  })
};

transform()
    .then(res => console.log(res))
    .catch(err => {
      process.stderr.write('FS operation failed');
      process.exit(1);
    })
