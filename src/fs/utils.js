import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export function getPath(path) {
  const __filename = fileURLToPath(path);
  return dirname(__filename);
}