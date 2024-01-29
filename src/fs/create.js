import fs from "fs";
import path from "path";


const create = async () => {
    const root = "./src/fs/files";
    const name = "fresh.txt";
    const file = path.join(root, name);

    if (fs.existsSync(file)) {
        throw new Error("FS operation failed");
    }
    fs.writeFileSync(file, "I am fresh and young");

};

await create();
