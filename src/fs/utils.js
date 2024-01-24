import path from 'path';
import { fileURLToPath } from 'node:url';


export const getDir = () => path.dirname(fileURLToPath(import.meta.url));
