import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const remove = async () => {
    const delFile = path.join(__dirname, '/files/fileToRemove.txt');
    if (!fs.existsSync(delFile)) {
      throw new Error('FS operation failed');
    }
    fs.unlinkSync(delFile);
};

remove();
