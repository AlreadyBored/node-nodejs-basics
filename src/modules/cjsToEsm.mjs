import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer } from 'http';
import * as c from './files/c.js';
import { readFile } from 'fs/promises';

const a = await readFile('./files/a.json', {encoding: 'utf-8'}, (err, data) => {
  if (err) {
    throw err
  }
  return JSON.parse(data)
})
const b = await readFile('./files/a.json', {encoding: 'utf-8'}, (err, data) => {
  if (err) {
    throw err
  }
  return JSON.parse(data)
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = a;
} else {
  unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServer((_, res) => {
  res.end('Request accepted');
});

export {
  unknownObject,
  createMyServer,
};

