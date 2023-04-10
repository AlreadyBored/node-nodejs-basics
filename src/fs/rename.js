import fs from "fs";

const rename = async () => {
    try {
        const file_rename = "wrongFilename.txt";
        const new_file_name = "properFilename.md";
        const file_path = "src/fs/files";

        if (fs.existsSync(`${file_path}/${file_rename}`)) {
            fs.renameSync(`${file_path}/${file_rename}`, `${file_path}/${new_file_name}`);
            return;
        }

        console.log("FS operation failed");
    } catch (error) {
        console.log(error);
    }
};

await rename();