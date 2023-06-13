import { promises as fs } from 'node:fs';

export const isDirOrFileExist = async path => await fs.access(path).then(() => true).catch(() => false);
