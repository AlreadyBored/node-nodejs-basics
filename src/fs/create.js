import fs from 'fs';
const create = async () => {
    try {
        await fs.promises.writeFile('files/fresh.txt', 'I am fresh and young');
        console.log('File created successfully!');
    } catch (error) {
        console.error(error);
    }
};

await create();