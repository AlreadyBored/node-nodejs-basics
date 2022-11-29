import { writeFile } from 'node:fs/promises';

const create = async () => {
    await writeFile("1.txt", "I am fresh and young", {flag: "wx"});
};

await create();