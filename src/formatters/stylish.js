import _ from 'lodash';

const indent = (depth) => ' '.repeat(depth * 4 - 2);

const stringify = (value, depth = 1) => {
  if (!_.isObject(value)) {
    return `${(value)}`;
  }
  const keys = Object.keys(value);
  const result = keys.map((key) => `${indent(depth + 1)}  ${key}: ${stringify(value[key], depth + 1)}`);
  return `{\n${result.join('\n')}\n  ${indent(depth)}}`;
};

const doStylish = (diff) => {
  const iter = (tree, depth = 1) => {
    const result = tree.flatMap((node) => {
      const {
        key, type, oldValue, newValue, children,
      } = node;
      switch (type) {
        case 'nested':
          return `${indent(depth)}  ${key}: {\n${iter(children, depth + 1)}\n${indent(depth)}  }`;
        case 'added':
          return `${indent(depth)}+ ${key}: ${stringify(newValue, depth)}`;
        case 'deleted':
          return `${indent(depth)}- ${key}: ${stringify(oldValue, depth)}`;
        case 'updated':
          return [
            `${indent(depth)}- ${key}: ${stringify(oldValue, depth)}`,
            `${indent(depth)}+ ${key}: ${stringify(newValue, depth)}`,
          ];
        default:
          return `${indent(depth)}  ${key}: ${stringify(oldValue, depth)}`;
      }
    });
    return result.join('\n');
  };
  return `{\n${iter(diff)}\n}`;
};

export default doStylish;
