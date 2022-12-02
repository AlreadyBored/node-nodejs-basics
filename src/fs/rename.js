import { access, constants, rename as nodeRename } from 'node:fs/promises';

const rename = async () => {
    const wrongFilenamePath = new URL('./files/wrongFilename.txt', import.meta.url);
    const properFilenamePath = new URL('./files/properFilename.md', import.meta.url);
    
    try {
        await access(properFilenamePath, constants.F_OK);
        console.error('FS operation failed');
        return;
    } catch(_error) {
        try {
            await nodeRename(wrongFilenamePath, properFilenamePath);
        } catch(_error) {
            console.error('FS operation failed');
        }
    }
};

await rename();