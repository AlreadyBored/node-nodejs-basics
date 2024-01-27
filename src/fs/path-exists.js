import { access } from 'fs/promises';

export const pathExists = (path) =>
  access(path)
    .then(() => true)
    .catch(() => false);
