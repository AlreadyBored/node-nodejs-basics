import fs from 'fs/promises';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    // Write your code here 
    const srcPath = path.join(__dirname, 'files');
    const destPath = path.join(__dirname, 'files_copy');
};

await copy();
