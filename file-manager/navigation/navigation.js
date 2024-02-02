import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { changeDir } from '../utils/changeDir.js'


export function up(__dirname,arg) {
    
    let newDir = path.resolve(__dirname,'..')
        changeDir(newDir)
}

export function cd(__dirname,arg) {
    let newDir = path.resolve(__dirname,arg)
    console.log(arg, 'cd arg')
    changeDir(newDir)
}