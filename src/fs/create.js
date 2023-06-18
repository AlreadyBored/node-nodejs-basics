import fs from "fs";

const create = async () => {
    const dir = 'src/fs/files'
    const newFileName = 'fresh.txt'
    const fullPath = `${dir}/${newFileName}`
    const fileContent = 'I am fresh and young'
    const errorText = 'FS operation failed'

    if (fs.existsSync(fullPath)) throw Error(errorText)
    await fs.promises.writeFile(fullPath, fileContent);
};

await create();
