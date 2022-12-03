import { stat } from 'node:fs/promises';

export const isExistAsync = async (path) => {
    try {
        await stat(path);
        return true
    } catch {
        return false
    }
}