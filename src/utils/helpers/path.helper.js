import { fileURLToPath } from 'url';
import path from 'path';

export const getCurrentDirName = (importMetaUrl) => {
    const __filename = fileURLToPath(importMetaUrl);
    return path.dirname(__filename);
}

export const getNecessaryFilePath = (importMetaUrl, path) => {
    return getCurrentDirName(importMetaUrl) + path
}
