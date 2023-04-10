import fs from "fs";

const read = async () => {
    const read_file = "fileToRead.txt";
    const file_path = `src/fs/files/${read_file}`;
    
    if (fs.existsSync(file_path)) {
        const data = fs.readFileSync(file_path, {encoding: "utf-8"});
        return console.log(data.toString());
    }

    return console.log("FS operation failed");
};

await read();