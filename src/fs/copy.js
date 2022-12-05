import fs from 'node:fs/promises'

const copy = async () => {
  await fs.mkdir('./files_copy')

  const files = await fs.opendir('./files', {encoding:'utf-8'})

  for await (const file of files)
    await fs.copyFile('./files/'+file.name,'./files_copy/'+file.name)

};

copy().catch((err)=>console.error('FS operation failed'));
