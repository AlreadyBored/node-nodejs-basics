import fs from "fs";

const ifExists = async (name) => {
    try {
        await fs.promises.access(name);
        return true;
    } catch (e) {
        if (e.code === 'ENOENT') {
            return false;
        }
    }
}

export default ifExists ;