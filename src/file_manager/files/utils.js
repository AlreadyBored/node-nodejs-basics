import { join } from 'path';

const getFullPath = (fileName) => {
    return join(process.cwd(), fileName);
}

export {getFullPath}
