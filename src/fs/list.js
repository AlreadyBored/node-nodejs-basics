import fs from 'fs/promises'

export const list = async () => {
    try {
        const files = await fs.readdir('./files')
        console.log(files);
    } catch {
        throw new Error("FS operation failed")
    }
};