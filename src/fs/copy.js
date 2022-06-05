export const copy = async () => {
  // Write your code here
  try {
    const fs = await import("fs/promises");

    const SOURCE_DIRECTORY = "files";
    const DEST_DIRECTORY = "files_copy";

    async function copier(names, path) {
      const currentDestDirectory =
        DEST_DIRECTORY + path.slice(SOURCE_DIRECTORY.length);
      await fs.mkdir(currentDestDirectory);
      names.forEach(async (name) => {
        const ItemPath = path + "/" + name;
        const itemStat = await fs.stat(ItemPath);
        if (itemStat.isDirectory()) {
          copier(await fs.readdir(ItemPath), ItemPath);
        } else if (itemStat.isFile()) {
          await fs.writeFile(
            currentDestDirectory + name,
            await fs.readFile(ItemPath)
          );
        }
      });
    }

    const Filenames = await fs.readdir(SOURCE_DIRECTORY);
    copier(Filenames, SOURCE_DIRECTORY);
  } catch (e) {
    console.log("mYeRror: ", e.message);
  }
};
