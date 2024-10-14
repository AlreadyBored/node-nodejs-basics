export const checkArgs = (command, length) => {
  if (command.length !== length + 1) {
    console.log(`Must be ${length} arguments`);
    return false;
  } else return true;
};
