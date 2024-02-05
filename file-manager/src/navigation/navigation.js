import path from "node:path";
import { changeDir } from "../utils/changeDir.js";
import { readdir } from "fs/promises";
import { colors } from "../utils/colorize.js";

export async function up(...args) {
  args = args.flat();

  try {
    let newDir = path.resolve(args[0], "..");

    await changeDir(newDir);
  } catch (err) {
    console.error(colors.failed);
  }
}

export async function cd(...args) {
  args = args.flat();
  try {
    let newDir = path.resolve(args[0], args[1]);

    await changeDir(newDir);
  } catch (err) {
    console.error(colors.failed);
  }
}

export async function ls() {
  try {
    let newObjArray = [];
    const files = await readdir(process.cwd(), { withFileTypes: true });
    for (const file of files) {
      const newObj = {
        Name: file.name,
        Type: `${
          file.isDirectory() === true
            ? "Directory"
            : file.isFile() === true
            ? "File"
            : "Unknown"
        }`,
      };
      newObjArray.push(newObj);
    }
    let sortedArr =
      newObjArray.sort((a, b) => a.Type.localeCompare(b.Type)) ||
      a.Name.localeCompare(b.Name);

    console.table(sortedArr);
  } catch (err) {
    console.error(colors.failed);
  }
}
