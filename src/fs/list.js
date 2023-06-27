import { readdir } from 'fs/promises';
import { getAbsolutePath } from '../utils.js';

const folderPath = getAbsolutePath('./files', import.meta.url);

const list = async () => {
    try {
		const files = await readdir(folderPath);
		console.log(files);
	} catch (error) {
		console.log(error);
		throw new Error('FS operation failed');
	}
};

await list();