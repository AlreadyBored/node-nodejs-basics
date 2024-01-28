import { writeFile } from 'fs/promises';
const create = async () => {
    const text = 'I am fresh and young';
    try {
        await writeFile('./files/test.txt', text, {flag: "wx"});
    } catch (err) {
        console.error(err);
    } finally {
        console.log("Procedure has been done")
    }
};

await create();

