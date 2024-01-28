import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { MESSAGES } from '../utils.js'

const create = async () => {
  // Write your code here
  const data = new Uint8Array(Buffer.from('I am fresh and young'))

  const folder = './files'
  const file = 'fresh.txt'

  await writeFile(new URL(`${folder}/${file}`, import.meta.url), data, {
    flag: 'wx',
  }).catch((e) => {
    if (e) throw Error(MESSAGES.error)
  })
}

await create()
