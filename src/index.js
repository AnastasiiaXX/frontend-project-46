import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const path1 = path.resolve(process.cwd(), filepath1);
  const path2 = path.resolve(process.cwd(), filepath2);

  const fileReading1 = readFileSync(path1, 'utf-8');
  const fileReading2 = readFileSync(path2, 'utf-8');

  const json1 = JSON.parse(fileReading1);
  const json2 = JSON.parse(fileReading2);

  const keys = _.sortBy(_.union(Object.keys(json1), Object.keys(json2)));
  console.log(keys);
  const difference = keys.map((key) => {
    if (!_.has(json1, key)) {
      return `  + ${key}: ${json2[key]}`;
    }
    if (!_.has(json2, key)) {
      return `  - ${key}: ${json1[key]}`;
    }
    if (_.isEqual(json1[key], json2[key])) {
      return `    ${key}: ${json1[key]}`;
    }
    return [`  - ${key}: ${json1[key]}`, `  + ${key}: ${json2[key]}`];
  });

 // const flatDifference = _.flatten(difference).join('\n');
  return `{\n${difference.join('\n')}\n}`;
};

console.log(genDiff('file1.json', 'file2.json'));
