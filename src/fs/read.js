import fs from 'fs';

export const read = async () => {
    // Write your code here
    await fs.readFile("src/fs/files/hello.txt", "utf8",
        function (error, data) {
            if (error) console.error(new Error("FS operation failed"));
            console.log(data);
        });
};
read();
