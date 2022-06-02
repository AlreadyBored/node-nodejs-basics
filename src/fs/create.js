import fs from 'fs';

export const create = async () => {
    const path = 'src/fs/files/fresh.txt';
    if (fs.existsSync(path)) {
        console.error(new Error("FS operation failed"))
    }
    await fs.writeFile("src/fs/files/fresh.txt", "I am fresh and young",
        function (error) {
            if (error) console.error(new Error("FS operation failed"));
        }
    );
};
create();

