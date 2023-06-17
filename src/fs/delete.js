import { rm } from 'fs/promises';
import { getAbsolutePath } from '../utils.js';

const filePath = getAbsolutePath('./files/fileToRemove.txt', import.meta.url);

const remove = async () => {
    try {
		await rm(filePath);
	} catch (error) {
		console.log(error);
		throw new Error('FS operation failed');
	}
};

await remove();