import fs from 'fs'
import path from 'path'

export const create = async () => {
    const path_file = path.join(process.cwd(), 'files', 'fresh.txt');
    fs.exists(path_file, (exists) => {
        if(exists) return console.error("FS operation failed")
        fs.writeFileSync(path_file, "I am fresh and young");
        console.log("File created");
    })
};