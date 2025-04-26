import { rename as renameFs, access, stat } from 'node:fs/promises';

const rename = async () => {
    const oldName = 'src/fs/files/wrongFilename.txt'
    const newName = 'src/fs/files/properFilename.md'
    let existFile = null;
    try {
        existFile = await stat(newName)
    } catch (error) {
    }
    if (existFile) throw new Error('FS operation failed');

    try {
        await access(oldName);
    } catch (error) {
        throw new Error('FS operation failed');
    }
    await renameFs(oldName, newName);
};

await rename();