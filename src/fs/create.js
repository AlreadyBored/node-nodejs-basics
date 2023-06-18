import * as fs from "fs";

const create = async () => {
    const filePath = './files/fresh.txt'
    const content = 'I am fresh and young'
    const errorMessage = 'FS operation failed'

    await fs.access(filePath, (err) => {
        if (!err) {
            throw new Error(errorMessage);
        }

    })

    await fs.writeFile(filePath, content, (err) => {
        if (err) {
            throw new Error(errorMessage);
        }
    })
};

await create();