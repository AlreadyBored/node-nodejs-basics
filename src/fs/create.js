import fs from 'fs'

const create = async () => {
    const filePath = new URL('files/fresh.txt', import.meta.url)

    try {
        await fs.promises.access(filePath)
        throw new Error('FS operation failed')
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.promises.writeFile(filePath, 'I am fresh and young')
        }
        console.error(err)
    }
};

await create();