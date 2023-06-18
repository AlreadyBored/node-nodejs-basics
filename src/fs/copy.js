import fs from "fs";
const copy = async () => {
    const dirForCopy = 'src/fs/files'
    const destinationDir =  'src/fs/files_copy'
    if (fs.existsSync(destinationDir)) throw Error('FS operation failed')
    await fs.promises.cp(dirForCopy, destinationDir, { recursive: true })
};

await copy();
