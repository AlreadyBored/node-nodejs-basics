import { promises as fs } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const isDirOrFileExist = async path => await fs.access(path).then(() => true).catch(() => false);

export const  getDirname = (metaUrl) => {
  return dirname(fileURLToPath(metaUrl));
}
