import fs from "fs";

export const remove = async () => {
    try {
         if (fs.existsSync('./files/fileToRemove.txt')) {
            await fs.rmSync('./files/fileToRemove.txt', {
                force: true,
            });
        } else {
             console.log('FS operation failed ' )
         }

    } catch (err) {
        console.log(err)
    }
};
