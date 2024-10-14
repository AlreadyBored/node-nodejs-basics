import path from "path";

export const up = async () => {
  const currentDir = process.cwd();
  const parentDir = path.dirname(currentDir);

  if (currentDir === parentDir) {
    console.log("You are already in the root directory.");
  } else {
    process.chdir(parentDir);
    console.log(`Changed directory to ${parentDir}`);
  }
};
