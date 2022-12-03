import fs from "fs/promises";

export default async function getDirectoryContentList(url) {
    return await fs.readdir(url);
}
