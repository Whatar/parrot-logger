import { inspect } from 'util';

let hideLog = false;

enum Color {
  WHITE = '\x1b[37m', // White for general information
  BLACK = '\x1b[30m', // Black for general information
  GREEN = '\x1b[32m', // Green for success or positive messages
  YELLOW = '\x1b[33m', // Yellow for warnings or cautionary messages
  RED = '\x1b[31m', // Red for errors or critical messages
  RESET = '\x1b[0m' // Reset to default color
}

/** Log an information message */
const info = (...message: unknown[]) => {
  const messages = '❔ ' + message.map((msg) => `${Color.BLACK}${inspect(msg, false, null)}${Color.BLACK}`);
  print(messages);
};

/** Log a warning message */
const warn = (...message: unknown[]) => {
  const messages = '⚠️ ' + message.map((msg) => `${Color.YELLOW}${inspect(msg, false, null)}${Color.YELLOW}`);
  print(messages);
};

/** Log an error message */
const err = (...message: unknown[]) => {
  const messages = '❌ ' + message.map((msg) => `${Color.RED}${inspect(msg, false, null)}${Color.RED}`);
  print(messages);
};

/** Log a success message */
const ok = (...message: unknown[]) => {
  const messages = '✅ ' + message.map((msg) => `${Color.GREEN}${inspect(msg, false, null)}${Color.GREEN}`);
  print(messages);
};

/** Log the message to the console */
const log = (...message: unknown[]) => {
  const messages =
    '' + message.map((msg) => `${Color.WHITE}${inspect(msg, false, null, true /* enable colors */)}${Color.WHITE}`);
  print(messages);
};

/** Print the message to the console */
const print = (...message: unknown[]) => {
  if (hideLog) {
    return;
  }

  console.log(message.join(' ') + Color.RESET);
};

/** Refresh the environment variables inside the logger */
const refreshEnv = () => {
  hideLog = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod';

  if (process.env.LORIKEET_LOGGER_NOT_HIDE_LOG === 'true') {
    hideLog = false;
  }
};

refreshEnv();

export { info, warn, err, ok, log, refreshEnv };
