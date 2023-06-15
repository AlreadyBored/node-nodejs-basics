import { getPath } from '../fs/utils.js';
import { resolve } from 'node:path';

export function getFilesPath(fileName) {
  const __dirname = getPath(import.meta.url);
  return resolve(__dirname, 'files', fileName);
}