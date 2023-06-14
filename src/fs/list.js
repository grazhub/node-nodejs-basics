import { readdir } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const currentDirPath = dirname(fileURLToPath(import.meta.url));

const folderRelativePath = './files';

const list = async () => {
    try {
		const files = await readdir(resolve(currentDirPath, folderRelativePath));
		console.log(files);
	} catch (error) {
		console.log(error);
		throw new Error('FS operation failed');
	}
};

await list();