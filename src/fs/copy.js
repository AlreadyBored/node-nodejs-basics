import { access, constants } from "fs";
import path from "path";
import * as url from "url";
import { checkAccess, copySmthing, removeSmthing } from "../utils/utils.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const copy = async () => {
  const from = path.join(__dirname, "files");
  const to = path.join(__dirname, "files__copy");

  checkAccess(from);
  await access(to, constants.F_OK, async (err) => {
    if (!err) {
      console.log("It is bad, that this files_copy folder already exist, but our cp method is fucking rewrite it!");
      await removeSmthing(to);
      copySmthing(from, to);
    } else {
      copySmthing(from, to);
    }
  });
};

await copy();
