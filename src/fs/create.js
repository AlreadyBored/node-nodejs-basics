import * as fs from "fs";
import path from "path";
import * as url from "url";

export const create = async () => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const text = "I am fresh and young";
  const errorMessage = "FS operation failed";

  fs.writeFile(
    path.resolve(_dirname, "files", "fresh.txt"),
    text,
    { flag: "wx" },
    (error) => {
      if (error) throw new Error(errorMessage);
    }
  );
};
create();
