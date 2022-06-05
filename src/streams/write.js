export const write = async () => {
  // Write your code here
  const file = join(__dirname, "files", "fileToWrite.txt");

  const wStream = createWriteStream(file);

  process.stdin.pipe(wStream);
};

await write();
