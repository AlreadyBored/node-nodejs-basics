import { access, rename as fsRename } from 'node:fs/promises';
const rename   = async () => {
    try {
        await access('src/fs/files/properFilename.md');
        throw new Error('FS operation failed: properFilename.md already exists');
    } catch(err) {
        if(err.code === 'ENOENT') {
            await fsRename("src/fs/files/wrongFilename.txt", "src/fs/files/properFilename.md")
            console.log('File renamed successfully.');
        }else {
            throw new Error('FS operation failed')
         }
    }
};

await rename();