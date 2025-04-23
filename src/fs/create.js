import * as fs from "node:fs/promises";
import * as path from "node:path";

const create = async () => {
    try {
        const text = "I am fresh and young";

        await fs.writeFile(path.join(import.meta.dirname, "files", "fresh.txt"), text, {
            flag: "ax+",
        });
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await create();
