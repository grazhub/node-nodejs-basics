import { rename as renameFile } from 'fs/promises';
import { getAbsolutePath } from '../utils.js';

const currentFileURL = import.meta.url;

const wrongFilenamePath = getAbsolutePath('./files/wrongFilename.txt', currentFileURL);
const properFilenamePath = getAbsolutePath('./files/properFilename.md', currentFileURL);

const rename = async () => {
    try {
		await renameFile(wrongFilenamePath, properFilenamePath);
	} catch (error) {
		console.log(error);
		throw new Error('FS operation failed');
	} 
};

await rename();