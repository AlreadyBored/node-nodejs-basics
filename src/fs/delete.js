import fs from 'fs'

const remove = async () => {
    const filePath = new URL('files/fileToRemove.txt', import.meta.url)

    try {
        await fs.promises.rm(filePath).catch(err => {
            throw new Error('FS operation failed') 
        })
    } catch (err) {
        console.error(err)
    }
};

await remove();