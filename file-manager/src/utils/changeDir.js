import { chdir } from "node:process";
import { colors } from "../utils/colorize.js";

export async function changeDir(arg) {
  try {
    await chdir(arg);
  } catch (err) {
    console.error(colors.failed);
  }
}
