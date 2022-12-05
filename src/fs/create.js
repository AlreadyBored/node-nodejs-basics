import fsPromises from 'fs/promises'

const filePath = "./src/fs/files/fresh.txt"
const fileContent = "I am fresh and young"

const create = async () => {
    try {
        await fsPromises.access(filePath)
        try {
            throw new Error("FS operation failed")
        } catch (error) {
            console.error(error.message)
        }
    } catch {
        try {
            await fsPromises.writeFile(filePath, fileContent)
        } catch (error) {
            console.error("got an error while writing file: ${error.message}")
        }
    }
};

await create();