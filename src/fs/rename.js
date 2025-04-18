import { rename as fsRename } from 'node:fs/promises';
import { existsSync } from 'node:fs';
const rename   = async () => {
    if (existsSync('src/fs/files/properFilename.md') || !existsSync('src/fs/files/wrongFilename.txt')) {
        throw new Error ('FS operation failed')
    }
    await fsRename("src/fs/files/wrongFilename.txt", "src/fs/files/properFilename.md")
};

await rename();