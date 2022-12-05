import fs from 'node:fs/promises'

const remove = async () => {
    await fs.rm('./files/fileToRemove.txt')
};

await remove().catch((err)=>console.error('FS operation failed'));