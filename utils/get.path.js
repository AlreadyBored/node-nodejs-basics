import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const getPath = (metaUrl, pathToFile)  => {
    const __dirname = path.dirname(fileURLToPath(metaUrl));
    if (!pathToFile) {
        return __dirname;
    }
    return path.join(__dirname, pathToFile);
};

