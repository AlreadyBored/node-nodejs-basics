import zlib from 'zlib'
import fs from 'fs'
import {resolve} from 'path'
import { promisify } from 'util';
import { pipeline } from 'stream'

export const compress = async () => {

    const gzip = zlib.createGzip()
    const readFile = fs.createReadStream(resolve('src','zip','files','fileToCompress.txt'),{encoding:'utf-8'})
    const writeFile = fs.createWriteStream(resolve('src','zip','files','archive.gz'),{encoding:'utf8'})
    readFile.pipe(gzip).pipe(writeFile)
    fs.rm(resolve('src','zip','files','fileToCompress.txt'),(err)=>{
        if (err) return err
        console.log('Основной файл удален для удобства')
    })

};
compress()