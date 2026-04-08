import { copyFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const sourcePath = resolve('dist/index.html');
const targetPath = resolve('dist/404.html');

await stat(sourcePath);
await copyFile(sourcePath, targetPath);
