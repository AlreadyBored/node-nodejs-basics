import path from 'path';
import {fileURLToPath} from 'url';

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);