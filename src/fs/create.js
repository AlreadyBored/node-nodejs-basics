import fs from 'fs/promises'

export const create = async () => {
    const path = './files/fresh.txt'
    try {
        await fs.writeFile( path, "I am fresh and young",{flag:'wx'})
    } catch {
        throw new Error("FS operation failed")
    }
};