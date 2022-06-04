import { access } from 'fs/promises';

export const isExist = async (path) => {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
}
