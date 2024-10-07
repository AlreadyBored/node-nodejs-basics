import fs from 'fs/promises';
import path from "path";
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const IsPathExist = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
};