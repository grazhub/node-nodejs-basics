import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import { getAbsolutePath } from '../utils.js';

const currentFileURL = import.meta.url;
const filePath = getAbsolutePath('./files/fileToCompress.txt', currentFileURL);
const archiveFilePath = getAbsolutePath('./files/archive.gz', currentFileURL);

const compress = async () => {
    await pipeline(createReadStream(filePath), createGzip(), createWriteStream(archiveFilePath));
};

await compress();