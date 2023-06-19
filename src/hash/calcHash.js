const calculateHash = async () => {
  const FILE_PATH = "./files/fileToCalculateHashFor.txt";
  const fileUrl = new URL(FILE_PATH, import.meta.url);

  const content = await readFile(fileUrl);
  const data = createHash('sha256').update(content);

  console.log(data.digest('hex'));
};

await calculateHash();
