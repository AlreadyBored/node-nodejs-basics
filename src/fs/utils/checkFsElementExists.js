import fs from "fs/promises";

export default async function checkFsElementExists(url) {
    try {
        await fs.access(url);

        return true;
    } catch(error) {
        return false;
    }
}
