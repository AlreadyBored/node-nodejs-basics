import fs from 'node:fs/promises'

const list = async () => {
  const list = await fs.readdir('./files')
  console.log(list)
};

await list().catch((err)=>console.error('FS operation failed'));