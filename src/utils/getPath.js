import { dirname, join, parse } from 'path';
import { fileURLToPath } from 'node:url';

export default function getPathToFile(name) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirnameFull = dirname(__filename);
  const __dirNameDir = parse(__dirnameFull).dir;
  return join(__dirNameDir, name);
}
