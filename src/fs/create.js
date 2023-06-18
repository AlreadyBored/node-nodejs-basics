import * as fs from "fs";

const create = async () => {
    const filePath = './files/fresh.txt'
    const content = 'I am fresh and young'
    const alreadyExistErr = 'FS operation failed: The file already exists'

    await fs.access(filePath, (err) => {
        if (!err) {
            throw new Error(alreadyExistErr);
        }

    })

    await fs.writeFile(filePath, content, (err) => {
        if (err) {
            throw err;
        }
    })
};

await create();