import { createReadStream, createWriteStream } from "node:fs";
import { stdout } from "node:process";
import {
  rename as renameFile,
  access,
  constants,
  unlink,
} from "node:fs/promises";
import path from "node:path";
import { colors } from "../utils/colorize.js";

export const read = async (...args) => {
  args = args.flat();

  try {
    const fileToRead = await createReadStream(args[1]);
    fileToRead.on("error", () => console.error(colors.failed));
    await fileToRead.pipe(stdout);
    fileToRead.on("end", () => {
      console.log();
    });
  } catch (err) {
    console.error(colors.failed);
  }
};

export const create = async (...args) => {
  args = args.flat();
  try {
    await createWriteStream(args[1], { flags: "wx" }).on("error", () =>
      console.error("operation failed")
    );
  } catch (err) {
    console.error("operation failed");
  }
};

export const rn = async (...args) => {
  args = args.flat();
  try {
    const exists = await access(args[2], constants.F_OK);

    if (exists === undefined) {
      console.error("operation failed");
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      try {
        let pathToFile = path.resolve(args[1]);
        let dir = path.dirname(pathToFile);
        await renameFile(pathToFile, `${dir}/${args[2]}`);
      } catch (err) {
        console.error("operation failed");
      }
    } else {
      console.error("operation failed");
    }
  }
};

export const copy = async (...args) => {
  args = args.flat();
  let pathToFile = path.resolve(args[1]);
  let fileName = path.basename(pathToFile);
  let destPath = path.resolve(args[2]);
  try {
    const fileToCopy = await createReadStream(pathToFile, { flags: "r+" });
    fileToCopy.on("error", (error) => {
      if (error.code === "ENOENT") {
        console.error(colors.failed);
      } else {
        console.error(colors.failed);
      }
    });
    fileToCopy.on("open", async () => {
      const destFile = await createWriteStream(`${destPath}/${fileName}`);
      fileToCopy.on("error", () => console.error(colors.failed));
      destFile.on("error", () => console.error(colors.failed));
      await fileToCopy.pipe(destFile);
    });
  } catch (err) {
    console.error(colors.failed);
  }
};

export const move = async (...args) => {
  args = args.flat();
  let pathToFile = path.resolve(args[1]);
  let fileName = path.basename(pathToFile);
  let destPath = path.resolve(args[2]);

  try {
    const fileToCopy = createReadStream(pathToFile, { flags: "r+" });
    fileToCopy.on("error", (error) => {
      if (error.code === "ENOENT") {
        console.error(colors.failed);
      } else {
        console.error(colors.failed);
      }
    });

    fileToCopy.on("open", async () => {
      const destFile = createWriteStream(`${destPath}/${fileName}`);

      destFile.on("error", (error) => {
        console.error(colors.failed);
      });

      fileToCopy.pipe(destFile);
      await unlink(pathToFile);
    });
  } catch (err) {
    console.error(colors.failed);
  }
};

export const remove = async (...args) => {
  args = args.flat();
  try {
    let pathToFile = path.resolve(args[1]);
    await unlink(pathToFile);
  } catch (err) {
    console.error(colors.failed);
  }
};
