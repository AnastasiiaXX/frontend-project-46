import { readFileSync } from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const getFileExtension = (file) => path.extname(file);

export default (file) => {
  const extension = getFileExtension(file);

  switch (extension) {
    case '.json':
      return JSON.parse(readFileSync(file, 'utf-8'));
    case '.yml':
    case '.yaml':
      return yaml.load(readFileSync(file, 'utf-8'));
    default:
      throw new Error('invalid file extension');
  }
};
