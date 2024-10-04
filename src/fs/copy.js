import fs from 'fs/promises'
import path from "path";
const copy = async () => {
    const to = path.join(process.cwd(),'files_copy');
    const from = path.join(process.cwd(),'files');

    try {
        await fs.access(to);
        throw new Error('FS operation failed')
    } catch (err){
        if (err.code === 'ENOENT') {
            await fs.cp(from, to, {recursive: true})
        } else {
            throw err;
        }
    }
};

await copy();
