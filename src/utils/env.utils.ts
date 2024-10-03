// Models
import { Options } from '../model/options.model';

/** Load the options from the environment variables */
export function uploadOptionsToEnv(options: Options): void {
  if (options.hideLog !== undefined) process.env.LORIKEET_HIDE_LOG = options.hideLog.toString();
  if (options.emoji !== undefined) process.env.LORIKEET_EMOJI = options.emoji.toString();
  if (options.emoji !== undefined) process.env.LORIKEET_SEPARATOR = options.separator;
}

/** Get the options from the environment variables, here we set the default values */
export function getOptionsFromEnv(): Options {
  return {
    hideLog: process.env.cHIDE_LOG !== undefined ? process.env.HIDE_LOG === 'true' : false,
    emoji: process.env.LORIKEET_EMOJI !== undefined ? process.env.EMOJI === 'true' : true,
    separator: process.env.LORIKEET_SEPARATOR || ' '
  };
}
