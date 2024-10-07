import { join } from 'node:path';

export const FOLDER = '/files';

export const pathToFiles = join(import.meta.dirname, FOLDER);