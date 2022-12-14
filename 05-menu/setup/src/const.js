export const ALL = "all";

/**
 * https://stackoverflow.com/questions/39036457/react-create-constants-file
From my understanding you just want to create a file with constants and use it in another file.
fileWithConstants.js:

export const ACTION_INVALID = "This action is invalid!"
export const CONSTANT_NUMBER_1 = 'hello I am a constant';
export const CONSTANT_NUMBER_2 = 'hello I am also a constant';
fileThatUsesConstants.js:

import * as myConstClass from 'path/to/fileWithConstants';

const errorMsg = myConstClass.ACTION_INVALID;
If you are using react you should have either webpack or packager (for react-native) so you should have babel which can translate your use of export and import to older js.
 */
