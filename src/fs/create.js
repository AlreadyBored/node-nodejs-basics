import * as fs from 'fs'

export const create = async () => {
    const filepath = './files/fresh.txt'
    fs.writeFile(filepath, 'I am fresh and young', { flag: 'wx' }, err => {
        if (err) throw new Error('FS create operation failed')
    })
}
