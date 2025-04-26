import fs from 'fs';
import path from 'path';

const create = async (srcPath = './src/fs/files', file = 'fresh.txt', text = 'I am fresh and young', errorText = 'FS operation failed') => {
    const filePath = path.join(srcPath, file);

    if (fs.existsSync(filePath)) {
        throw new Error(errorText);
    }

    fs.writeFile(filePath, text, () => {});
};

await create();
