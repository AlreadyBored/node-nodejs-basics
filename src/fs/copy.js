import * as fs from 'fs'

export const copy = async () => {
    fs.cp('./files', './files_copy', { force: false, errorOnExist: true, recursive: true }, e => {
        if (e) throw new Error('FS create operation failed')
    })
}
