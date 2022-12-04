import fs from 'node:fs/promises';

const fileData = 'I am fresh and young';
const errorText = 'FS operation failed';
const filePath = process.cwd() + '/src/fs/files/fresh.txt';

const create = async () => {
    let fileExists = false;
    try {
        const fileStat = await fs.stat(filePath);
        if (fileStat) fileExists = true;;
    } catch (e) { }

    if (fileExists) throw Error(errorText);


    await fs.writeFile(filePath, fileData);
};

await create();
