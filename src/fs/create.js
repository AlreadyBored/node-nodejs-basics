import fs from "fs";

const fileContent = "I am fresh and young";
const fileFresh = "./src/fs/files/fresh.txt";

const create = async () => {
    try {
        const isFileFreshExist = await fs.promises
            .access(fileFresh, fs.constants.F_OK)
            .then(() => true)
            .catch(() => false);

        if (isFileFreshExist) {
            throw new Error("FS operation failed: file fresh.txt has already exist");
        } else {
            await fs.promises.writeFile(fileFresh, fileContent);
            console.log("fresh.txt file succefully created");
        }
    } catch (err) {
        console.error(err.message);
    }
};

await create();
