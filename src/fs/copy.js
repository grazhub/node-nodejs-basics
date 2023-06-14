import { readdir, mkdir, copyFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const currentDirPath = dirname(fileURLToPath(import.meta.url));

const copiesRelativePath = './files_copy';
const originRelativePath = './files';

const copy = async () => {
    try {
		const [files] = await Promise.all([
			readdir(resolve(currentDirPath, originRelativePath)),
			mkdir(resolve(currentDirPath, copiesRelativePath))
		]);
		const filePromises = files.map(fileName => copyFile(
			resolve(currentDirPath, `${originRelativePath}/${fileName}`),
			resolve(currentDirPath, `${copiesRelativePath}/${fileName}`)
		));
		await Promise.all(filePromises);
	} catch (error) {
		console.log(error);
		throw new Error('FS operation failed');
	}
};

await copy();
