import fs from "fs";

const remove = async () => {
    const delete_file = "fileToRemove.txt";

    const file_path = "src/fs/files";

    if (fs.existsSync(`${file_path}/${delete_file}`)) {
        fs.rmSync(`${file_path}/${delete_file}`)
        return;
    }

    return console.log("FS operation failed");
};

await remove();