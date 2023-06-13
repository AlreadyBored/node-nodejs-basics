import { fileURLToPath } from 'url';
import path from 'path';

export const HELPER = {
  FS_ERR: 'FS operation failed',
  getDirPath: (url) => {
    const __filename = fileURLToPath(url);
    return path.dirname(__filename);
  },
  fsErrCb: (err) => {
    if (err) {
      throw new Error(HELPER.FS_ERR);
    }
  },
};
