import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { changeDir } from '../utils/changeDir'


const __dirname = path.dirname(fileURLToPath(import.meta.url))

    let newDir = path.resolve(__dirname,'..')
    console.log(process.cwd())
    
    console.log(__dirname)
    async function change(){
        await changeDir(newDir)
    }
    await change()
    console.log(process.cwd())
    console.log(__dirname)