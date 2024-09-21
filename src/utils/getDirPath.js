import path from 'path';
import { fileURLToPath } from 'url';

export function getFilePath(metaUrl) {
  const __filename = fileURLToPath(metaUrl);

  return __filename;
}

export function getDirPath(metaUrl) {
  const __dirname = path.dirname(getFilePath(metaUrl));

  return __dirname;
}
