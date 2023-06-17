import { readFile } from 'fs/promises';
import { getAbsolutePath } from '../utils.js';

const filePath = getAbsolutePath('./files/fileToRead.txt', import.meta.url);

const read = async () => {
    try {
		const content = await readFile(filePath, { encoding: 'utf8' });
		console.log(content);
	} catch (error) {
		console.log(error);
		throw new Error('FS operation failed');
	} 
};

await read();