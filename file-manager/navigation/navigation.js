import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { changeDir } from '../utils/changeDir'


export function up(arg,__dirname) {
    
    let newDir = path.resolve(__dirname,'..')
        changeDir(newDir)
}

export function cd(arg,__dirname) {
    let newDir = path.resolve(__dirname,arg)
    console.log(arg, 'cd arg')
    changeDir(newDir)
}