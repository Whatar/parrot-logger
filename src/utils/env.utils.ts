// Models
import { Options } from '../model/options.model';
import * as dotenv from 'dotenv';

// Load the evirnoment variables
dotenv.config();

/** Get the options from the environment variables if they exist or use the default values */
export function getOptions(): Options {
  const options = {
    hideLog: process.env.LORIKEET_HIDE_LOG === 'true' || false,
    emoji: process.env.LORIKEET_EMOJI === 'true' || true,
    separator: process.env.LORIKEET_SEPARATOR || ' '
  };

  return options;
}

/** Load the options from the environment variables */
export function updateOptions(options: Options): Options {
  if (options.hideLog !== undefined) process.env.LORIKEET_HIDE_LOG = String(options.hideLog);
  if (options.emoji !== undefined) process.env.LORIKEET_EMOJI = String(options.emoji);
  if (options.separator !== undefined) process.env.LORIKEET_SEPARATOR = options.separator;

  return getOptions();
}
