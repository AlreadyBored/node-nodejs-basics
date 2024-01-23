import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const getDir = (url) => dirname(fileURLToPath(url))