import { rm } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const currentDirPath = dirname(fileURLToPath(import.meta.url));

const fileRelativePath = './files/fileToRemove.txt';

const remove = async () => {
    try {
		await rm(resolve(currentDirPath, fileRelativePath));
	} catch (error) {
		console.log(error);
		throw new Error('FS operation failed');
	}
};

await remove();