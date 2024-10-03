import { access, cp, mkdir } from 'fs/promises'

const copy = async () => {
    try{
        await access('files').catch(() => {
            throw new Error('FS operation failed')
        })
        await access('files_copy').then(() => {
            throw new Error('FS operation failed')
        })
    } catch(err) {
        if (err.code === 'ENOENT') {
            await mkdir('files_copy')
            await cp('files', 'files_copy', { recursive: true })
        } else {
            throw new Error('FS operation failed')
        }
    }
};

await copy();
