import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const getDir= (url) => dirname(fileURLToPath(url));

