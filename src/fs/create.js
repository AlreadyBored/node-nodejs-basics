import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.join(__dirname, 'files', 'fresh.txt')

export const create = async (data) => {
    fs.readdir(path.join(__dirname, 'files'), (err, files) => {
        if (err) throw err

        const allreadyExist = files.includes('fresh.txt')
        const error = new Error('FS operation failed')

        console.log(allreadyExist)

        if (allreadyExist) throw error.message
        else {
            fs.writeFile(filePath, data, err => {
                if (err) throw err
        
                console.log('the file was uploaded')
            })
        }
    })
};

await create('I am fresh and young')