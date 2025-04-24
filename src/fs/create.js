import fs from 'fs/promises';

const create = async () => {
    const dir = 'src/fs/files';
    const filePath = `${dir}/fresh.txt`;
    const content = 'I am fresh and young';

        // Check if file exists
        try {
            await fs.access(filePath);
            throw new Error('FS operation failed'); // file already exists
        } catch (err) {
            console.log(err.message);
        }

        await fs.writeFile(filePath, content);
    console.log('success')
};

await create();