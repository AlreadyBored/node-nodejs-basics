const GREETING_MESSAGE = 'Welcome to the File Manager';
const FAREWELL_MESSAGE = 'Thank you for using File Manager';

export const greeteing = (name) => {
  console.log(`${GREETING_MESSAGE}, ${name}!`);
};

export const farewell = (name) => {
  console.log(`${FAREWELL_MESSAGE}, ${name}!`);
};
