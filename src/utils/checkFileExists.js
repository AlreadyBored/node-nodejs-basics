import { promises as fs, constants } from 'fs';

export const checkFileExists = (file) => {
  return fs.access(file, constants.F_OK)
    .then(() => true)
    .catch(() => false)
}
