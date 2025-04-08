import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const getDirName = (url) => {
    const __filename = fileURLToPath(url);
    return dirname(__filename);
};
