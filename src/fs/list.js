import fs from "fs/promises";
import path from "path";
const list = async () => {
    const filePath = path.join(process.cwd(),'files');
    try{
        await fs.access(filePath);
        const files = await fs.readdir(filePath);
        files.forEach(file => console.log(file))
    }catch (err){
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }else {
            throw err
        }
    }
};

await list();
