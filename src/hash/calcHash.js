const { createHmac, update, digest } = await import('crypto');
import { createHash } from 'crypto';
import * as fs from 'fs'

const fileLocation = "./src/hash/files/fileToCalculateHashFor.txt"

const readOptions = {
    encoding: 'utf-8'
}

/* 1) createHmac - Hmac объект на базе алгоритма и секретного ключа 2) Update - добавляет данные в Hmac объект первым параметром, а вторым параметром их кодировку
3) Digest - возвращает хэш стрингом (если задали кодировку) или буфером*/

export const calculateHash = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileLocation, readOptions, (err, data) => {
            if (err) throw err
            resolve(createHash('sha256').update(data).digest('hex'))
        })
    })
}
await calculateHash()

