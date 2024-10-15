import { readdir, stat } from 'fs/promises'
import path from 'node:path'

function Named(Name, Type) {
    this.Name = Name;
    this.Type = Type;
}

export const printListOfFiles = async (dirPath) => {
    const files = await readdir(dirPath)

    const formattedData = files.map(async (recordPath) => {
        const absoluteRecordPath = path.resolve(dirPath, recordPath)
        const stats = await stat(absoluteRecordPath)
        if (stats.isFile()) {
            return [recordPath, 'file']
        } else {
            return [recordPath, 'directory']
        }
    })

    const listOfDirectory = await Promise.all(formattedData)

    console.table(listOfDirectory.map(record => new Named(...record)));
   
}