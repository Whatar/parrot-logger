import { inspect } from 'util';

/** Convert a message to a string */
export const convertToString = (message: unknown, color = false): string => {
  if (typeof message === 'string') {
    return message;
  }

  return inspect(message, false, null, color);
};
