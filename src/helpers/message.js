const GREETING_MESSAGE = 'Welcome to the File Manager,';
const FAREWELL_MESSAGE = 'Thank you for using File Manager,';
const DIRECTORY_MESSAGE = 'You are currently in';
const INVALID_INPUT_MESSAGE = 'Invalid input';
const INVALID_POERATION_FAILED = 'Operation failed';

export const printMessage = (standartPhrase, userPhrase) => {
  console.log(`${standartPhrase} ${userPhrase}!\n`);
}
export const printGreeteing = (name) => printMessage(GREETING_MESSAGE, name);

export const printFarewell = (name) => printMessage(FAREWELL_MESSAGE, name);

export const printCurrentDiretory = (path_to_working_directory) => {
  console.log(`${DIRECTORY_MESSAGE} ${path_to_working_directory}\n`);
};

export const printInvalidInput = () => {
  console.log(`${INVALID_INPUT_MESSAGE}\n`);
};

export const printInvalidOperation = () => {
  console.log(`${INVALID_POERATION_FAILED}\n`);
};
