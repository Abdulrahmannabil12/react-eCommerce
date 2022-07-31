import { DirectoryActionTypes } from './directory.types.js';

export const setCurrentDirectory = directory => ({
  type: DirectoryActionTypes.SET_CURRENT_Directory,
  payload: directory
});
