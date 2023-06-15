import * as fs from 'fs/promises';

export const exist = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch (e) {
        return false;
    }
}
