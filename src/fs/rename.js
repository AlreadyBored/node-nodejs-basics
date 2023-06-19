import fs from 'fs'

const rename = async () => {
    const wrongFilename = new URL('files/wrongFilenamee.txt', import.meta.url)
    const properFilename = new URL('files/properFilename.md', import.meta.url)

    try {
        await fs.promises.access(properFilename)
        throw new Error('FS operation failed')        
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.promises.rename(wrongFilename, properFilename).catch(err => { 
                throw new Error('FS operation failed') 
            })
        }
        console.error(err)
    }
};

await rename();