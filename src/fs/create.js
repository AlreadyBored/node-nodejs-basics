import fs from 'fs'

const path = 'src/fs/files/fresh.txt';
const content = 'I am fresh and young';

const create = async () => {
    if (fs.existsSync(path)) throw new Error('FS operation failed')

    await fs.writeFile(path, content, { flag: 'wx' }, () => {})
};

await create();
