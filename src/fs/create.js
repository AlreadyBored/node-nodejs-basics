import fs from 'fs';

const create = async () => {
    const filePath = './files/fresh.txt';
    try {
        try {
            await fs.access(filePath);
            throw new Error('File already exists');
        }catch (error) {

        }
        await fs.writeFile(filePath, 'I am fresh and young');
        console.log('Fresh file created successfully!');
    }catch (error) {
        console.error(error.message)
    }
};

await create();