import path, { dirname } from 'node:path';

export const createCorrectPath = (_filename, ...paths) => {
    const _dirname = dirname(_filename);
    return path.join(_dirname, ...paths);
}