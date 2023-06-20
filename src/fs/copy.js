import fs from 'fs';

const copy = async () => {
    fs.access("src/fs/files_copy", (error) => {
        if (error) {
            fs.cp('src/fs/files', 'src/fs/files_copy', { recursive: true }, (err) => {
                if (err) {
                    console.error(err);
                }
                console.log("File created");
                });
        } else {
            throw new Error("FS operation failed")
        }
    });
};

await copy();

