import { readFileSync } from 'fs';
import path from 'path';

export default (filepath1, filepath2) => {
  const path1 = path.resolve(process.cwd(), filepath1);
  const path2 = path.resolve(process.cwd(), filepath2);

  const fileReading1 = readFileSync(path1, 'utf-8');
  const fileReading2 = readFileSync(path2, 'utf-8');

  const json1 = JSON.parse(fileReading1);
  const json2 = JSON.parse(fileReading2);

  return [json1, json2];
};
