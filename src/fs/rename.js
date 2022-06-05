import fs from 'fs'

export const rename = async () => {
        try {
            if (fs.existsSync('./files/properFilename.md')) {
                throw new Error("FS operation failed")
            }
            await fs.promises.rename('./files/wrongFilename.txt','./files/properFilename.md')
        } catch (e){
            console.log(e);
            throw new Error("FS operation failed")
        }
};