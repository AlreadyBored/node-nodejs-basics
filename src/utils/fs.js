import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const getFilePath = (url, ...paths) => {
    const filePath = join(dirname(fileURLToPath(url)), ...paths);
    return filePath
};

export { fs, getFilePath }