import { cp } from 'node:fs/promises';
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';
const copy = async () => {
    const src = resolve('src/fs/files');
    const dest = resolve('src/fs/files_copy');
    try {
        if (existsSync(dest) || !existsSync(src)) {
          throw new Error ('FS operation failed')
        }
        await cp(src, dest, { recursive: true });
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
