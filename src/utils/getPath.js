import path from 'path';
import {fileURLToPath} from 'url';

const getPath = (fileUrl, filesDir = '', fileName = '') => {
    const __filename = fileURLToPath(fileUrl);
    const __dirname = path.dirname(__filename);

    return path.join(__dirname, filesDir, fileName);
};

export default getPath;